import type { Ref } from 'vue';
import type { BaseType, EmitFn2 } from '../../_utils/types';
import type { TableDataWithRaw, TableRowSelection } from '../types';
import { TableData } from '../types';
export declare const useRowSelection: ({ selectedKeys, defaultSelectedKeys, rowSelection, currentAllRowKeys, currentAllEnabledRowKeys, emit, }: {
    selectedKeys: Ref<BaseType[] | undefined>;
    defaultSelectedKeys: Ref<BaseType[] | undefined>;
    rowSelection: Ref<TableRowSelection | undefined>;
    currentAllRowKeys: Ref<BaseType[]>;
    currentAllEnabledRowKeys: Ref<BaseType[]>;
    emit: EmitFn2<{
        "update:selectedKeys": (rowKeys: BaseType[]) => true;
        select: (rowKeys: BaseType[], rowKey: BaseType, record: TableData) => true;
        selectAll: (checked: boolean) => true;
        selectionChange: (rowKeys: BaseType[]) => true;
    }>;
}) => {
    isRadio: import("vue").ComputedRef<boolean>;
    selectedRowKeys: import("vue").ComputedRef<BaseType[]>;
    currentSelectedRowKeys: import("vue").ComputedRef<BaseType[]>;
    handleSelectAll: (checked: boolean) => void;
    handleSelect: (checked: boolean, record: TableDataWithRaw) => void;
    handleSelectAllLeafs: (record: TableDataWithRaw, checked: boolean) => void;
    select: (rowKey: BaseType | BaseType[], checked?: boolean) => void;
    selectAll: (checked?: boolean) => void;
    clearSelected: () => void;
};
