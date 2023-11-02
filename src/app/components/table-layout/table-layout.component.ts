import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef } from '@angular/core';
import { IApiBaseMeta, ITableLayoutProps } from '@app/interfaces';
import { enviroment } from '@environments/environment';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { SvgIconPipe } from '@app/pipes/svg-icon.pipe';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { EmptyComponent } from '../empty/empty.component';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzCollapseModule,
    NzToolTipModule,
    TranslateModule,
    SvgIconPipe,
    NzPopconfirmModule,
    NzTableModule,
    NzPaginationModule,
    EmptyComponent,
  ],
})
export class TableLayoutComponent implements OnChanges {
  @Input() props: ITableLayoutProps | undefined;
  @Input() loading: boolean = true;
  @Input() allowFilter: boolean = true;
  @Input() expandFilter: boolean = false;

  @Input() nzLoadingIndicator!: TemplateRef<any>;

  @Output() oReset: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oRefresh: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oToggleExpand: EventEmitter<any> = new EventEmitter(undefined);
  @Output() oChangeParams: EventEmitter<any> = new EventEmitter(undefined);

  showFilterMb = false;
  list: any[] = [];
  pageSize = 10;
  currentParams: IApiBaseMeta = {
    totalPages: 0,
    pageNumber: 0,
    pageSize: enviroment.defaultPageSize,
  };
  stateProps: ITableLayoutProps = {
    data: [],
    expandFilter: false,
    showExpand: false,
    showTable: true,
    showReset: true,
    showRefresh: true,
    showExportExcel: true,
    showDefaultButtons: true,
    showPagination: true,
    maxHeight: '',
    minWidth: -1,
    no_data_msg: 'error.NO_DATA',
    param: { ...this.currentParams },
    alertReset: false,
    nzWidthConfig: [],
  };
  // expandFilter = false;
  column = {
    left: 16,
    right: 8,
  };

  constructor() {}
  ngOnChanges() {
    if (this.props) {
      this.stateProps = Object.assign(this.stateProps, this.props);
    }
    this.list = this.stateProps['data']
      ? this.stateProps.data.map((item) => Object.assign({}, item))
      : [];
    if (this.stateProps.param) {
      this.currentParams = this.stateProps.param;
    }
  }

  //#region Output Emit event
  onQueryParamsChange(evt: NzTableQueryParams | number, type: string) {
    let _params: IApiBaseMeta = { ...(this.currentParams as any) };
    switch (type) {
      case 'table':
        _params.pageNumber = (evt as NzTableQueryParams).pageIndex;
        _params.pageSize =
          (evt as NzTableQueryParams).pageSize < enviroment.defaultPageSize
            ? enviroment.defaultPageSize
            : (evt as NzTableQueryParams).pageSize;
        // if ((evt as NzTableQueryParams).filter.length > 0) {
        //   _params.filter = (evt as NzTableQueryParams).filter;
        // }
        // if ((evt as NzTableQueryParams).sort.length > 0) {
        //   _params.sort = (evt as NzTableQueryParams).sort;
        // }
        break;
      case 'size':
        _params.pageSize = evt as number;
        _params.pageNumber = 1;
        break;
      default:
        _params.pageNumber = evt as number;
        break;
    }
    if (JSON.stringify(_params) !== JSON.stringify(this.currentParams)) {
      this.currentParams = { ..._params };
      this.oChangeParams.emit(this.currentParams);
    }
  }
  onReload() {
    this.oReset.emit(this.currentParams);
  }
  onRefresh() {
    this.oRefresh.emit(this.currentParams);
  }
  onToggleExpand() {
    this.expandFilter = !this.expandFilter;
    this.oToggleExpand.emit(this.expandFilter);
  }
  //#endregion
}
