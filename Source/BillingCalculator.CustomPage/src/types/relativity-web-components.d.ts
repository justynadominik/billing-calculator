/* eslint-disable */
/**
 * Custom type definition file for Relativity Web Components
 */

declare module "relativity-web-components" {
  declare class RWCConfig {
    _defaultLocale: string;
    _getTimeZoneAbbreviation: Function;
    _formatNumber: Function;
    _parseNumber: Function;
    _translate: Function;
    _defaultNumberLocale: any;
    _defaultCalendarLocale: any;
    _iconSource: string;
    _iconSourceFormat: string;
    /**
     * @desc Sets the format to load the source of the icon.
     * @param {String} value String for the format to load the icon.
     */
    set iconSourceFormat(arg: string);
    /**
     * @desc Gets the format to load the source of the icon.
     * @param {String} value String for the format to load the icon.
     */
    get iconSourceFormat(): string;
    /**
     * @desc Sets the source of the icon svg.
     * @param {String} value String for the source of the icon svg.
     */
    set iconSource(arg: string);
    /**
     * @desc Gets the source of the icon svg.
     * @returns {String} String for the source of the icon svg.
     */
    get iconSource(): string;
    /**
     * @desc Sets function for getting time zone abbreviation.
     * @param {Function} value Function for getting time zone abbreviation.
     */
    set getTimeZoneAbbreviation(arg: Function);
    /**
     * @desc Gets function for getting time zone abbreviation.
     * @returns {Function} Function for getting time zone abbreviation.
     */
    get getTimeZoneAbbreviation(): Function;
    /**
     * @desc Sets function for formatting localized number.
     * @param {Function} value Function for number formatting.
     */
    set formatNumber(arg: Function);
    /**
     * @desc Gets function for formatting localized number.
     * @returns {Function} Function for number formatting.
     */
    get formatNumber(): Function;
    /**
     * @desc Sets function for parsing localized number.
     * @param {Function} value Function for formatting culture invariant number.
     */
    set parseNumber(arg: Function);
    /**
     * @desc Gets function for parsing localized number.
     * @returns {Function} Function for formatting culture invariant number.
     */
    get parseNumber(): Function;
    /**
     * @desc Sets default locale.
     * @param {String} value Default locale, a BCP 47 language tag.
     */
    set defaultLocale(arg: string);
    /**
     * @desc Gets default locale.
     * @returns {String} Default locale, a BCP 47 language tag.
     */
    get defaultLocale(): string;
    /**
     * @desc Sets default number locale.
     * @param {NumberLocaleInfo} value Default number locale info.
     */
    set defaultNumberLocale(arg: any);
    /**
     * @desc Gets default number locale.
     * @returns {NumberLocaleInfo} Default number locale info.
     */
    get defaultNumberLocale(): any;
    /**
     * @desc Sets default calendar locale.
     * @param {CalendarLocaleInfo} value Default calendar locale info.
     */
    set defaultCalendarLocale(arg: any);
    /**
     * @desc Gets default calendar locale.
     * @returns {CalendarLocaleInfo} Default calendar locale info.
     */
    get defaultCalendarLocale(): any;
    /**
     * @desc Sets function for translating text.
     * @param {Function} value Function for translating text.
     */
    set translate(arg: Function);
    /**
     * @desc Gets function for translating text.
     * @returns {Function} Function for translating text.
     */
    get translate(): Function;
  }

  const config: RWCConfig;

  namespace dataEditing {
    type ValidationDetails = {
      isValid: boolean;
      errors: string[];
    };

    type FieldEvent<T> = Event & {
      detail: T;
    };

    type ValidationEventDetails = {
      validation: ValidationDetails;
    };

    namespace baseField {
      /**
       * This is the Abstract Class for Base Field Component. Not meant to be instantiated but extended by the different field types
       */
      class BaseField extends HTMLElement {
        label: string;
        required: boolean;
        editMode: boolean;
        disabled: boolean;
        invalid: boolean;
        validationMessage: string;
        size: string;
        noLabel: boolean;
        noRequiredIndicator: boolean;
        theme: string;
        hidden: boolean;
        ariaDescribedby: string;
        inputSlotsInViewModeEnabled: boolean;
      }
    }

    namespace booleanCheckboxInputField {
      class BooleanCheckboxInputField extends baseField.BaseField {
        removeNoValueChoice: boolean;
        value: string;
      }
    }

    namespace dropdownInputField {
      /**
       * @desc <rwc-dropdown-input-field></rwc-dropdown-input-field>
       */
      class DropdownInputField extends baseField.BaseField {
        value: string;
        displayValue: string;
        loading: boolean;
        typeAheadThreshold: number;
        loadingMessage: string;
        dropdownAriaLabel: string;
        searchBoxAriaLabel: string;
        selectSingleChoiceByDefault: boolean;
        removeNoValueChoice: boolean;
        error: boolean;
        errorMessage: string;
        errorButton: string;
        errorButtonOnClick(): void;
        sortOptions: boolean;
        setChoices(choices: Object): void;
        toggleLoadingState(): void;
        toggleErrorState(): void;
      }
    }

    namespace multipleObjectListField {
      /**
       * @desc <rwc-multiple-object-list-field></rwc-multiple-object-list-field>
       */
      class MultipleObjectListField extends baseField.BaseField {
        addButtonAriaLabel: string;
        addButtonText: string;
        addButtonVisible: boolean;
        clearButtonAriaLabel: string;
        clearButtonText: string;
        clearButtonVisible: boolean;
        editButtonAriaLabel: string;
        editButtonText: string;
        editButtonVisible: boolean;
        emptyValueDisplayText: string;
        hasLockedItems: boolean;
        itemsExceededTopLimitText: string;
        lockedItemsText: string;
        manageButtonAriaLabel: string;
        manageButtonText: string;
        manageButtonVisible: boolean;
        maxItemsToShow: boolean;
        meButtonAriaLabel: string;
        meButtonText: string;
        meButtonVisible: boolean;
        onBlur: any;
        value: any;
        viewAllItemsText: string;
        focusAddButton(): void;
        focusClearButton(): void;
        focusEditButton(): void;
        focusManageButton(): void;
        focusMeButton(): void;
      }
    }

    namespace radioButtonGroupField {
      /**
       * @desc This is the RWC Radio Button Group Field component.
       * @emits {change} Is emitted when the value of the radio button changes.
       * @example
       * <rwc-radio-button-group-field label="Field Label" value="Field Value" validation-message="This is a validation message"></rwc-radio-button-group-field>
       *
       * @see <a href="./manual/example/radio-button-group-field.html">Extended example of using a Radio Button Group Field</a>
       */
      class RadioButtonGroupField extends baseField.BaseField {
        choices: any[];
        columnCount: number;
        displayValue: string;
        error: boolean;
        errorButtonText: string;
        errorButtonOnClick(): void;
        errorMessage: string;
        notSetChoiceText: string;
        value: string;
        loading: boolean;
        loadingText: string;
        loadingStateChoicesCount: number;
        allowContentOverflow: boolean;
        noDeselectAbility: boolean;
      }
    }

    namespace textInputField {
      /**
       * This is the RWC Text Input Field component
       * @emits {change} Is emitted when the value of the input changes.
       * @example
       * <rwc-text-input-field label="Field Label" value="Field Value" validation-message="This is a validation message"></rwc-text-input-field>
       *
       * @see <a href="./manual/example/text-input-field.html">Extended example of using a Text Input Field</a>
       */
      class TextInputField extends baseField.BaseField {
        value: string;
        rawValue: string;
        maxLength: number;
        htmlEnabled: boolean;
        sanitizedHtml: string;
      }
    }

    namespace switchField {
      /**
       * <rwc-switch-field></rwc-switch-field>
       * @see <a href="./manual/example/switch-field.html">Extended example of using a switch field.</a>
       */
      class SwitchField extends baseField.BaseField {
        falseChoiceText: string;
        topLabel: boolean;
        trueChoiceText: string;
        value: string;
        toggleValueState(): void;
      }
    }

    namespace textAreaField {
      /**
       * <rwc-text-area-field></rwc-text-area-field>
       */
      class TextAreaField extends baseField.BaseField {
        editModeRowCount: string;
        htmlEnabled: boolean;
        placeholder: string;
        sanitizedHtml: string;
        value: string;
        viewModeHeightInPx: number;
        viewModelIsScrollable: boolean;
        toggleViewModelIsScrollable(): boolean;
      }
    }

    namespace toggleField {
      class ToggleField extends baseField.BaseField {
        value: string;
        falseChoiceText: string;
        trueChoiceText: string;
      }
    }

    namespace fieldValidationMessage {
      class FieldValidationMessage extends HTMLElement {
        hidden: boolean;
        theme: string;
        defaultValue: string;
      }
    }

    namespace menuButton {
      class MenuButton extends HTMLElement {
        expanded: boolean;
        disabled: boolean;
        isAbove: boolean;
        activeText: string;
        activeTooltip: string;
        buttonType: string;
        expandAriaLabel: string;
        collapseAriaLabel: string;
      }
    }
  }

  namespace dataManagement {
    namespace conditions {
      /**
       * @see <a href="./class/src/data-management/conditions/condition.js~Condition.html">Official Documentation</a>
       */
      class Condition {
        displayValue: string | string[];
        operator: string;
        value: string | string[];

        constructor(
          operator: string,
          value: number | string,
          displayValue: string
        );
      }

      abstract class BaseCondition extends HTMLElement {
        advanced: boolean;
        advancedButtonText: string;
        ariaLabel: string;
        containerClass: string;
        elementFlyoutFocusInProxy: any;
        errorMessage: string;
        flyoutContentContainer: Element | null;
        flyoutId: string | null;
        tabbable: boolean;
        getAnchor(): HTMLElement;
        getCustomDynamicContentElement(): HTMLElement | null;
        getFlyoutOptions(): any;
        handleNavigationOnTabClick(click: KeyboardEvent): void;
        abstract hasEventOriginatedInsideElement(event: Event): boolean;
        hideDynamicFlyoutContent(): void;
        notifyPositionChangeEnded(): void;
        notifyPositionChangeStarted(): void;
        onBeforeFlyoutPrepare(): void;
        onDynamicFlyoutContentHide(): void;
        onDynamicFlyoutContentShow(): void;
        onFlyoutDestroy(): void;
        showDynamicFlyoutContent(): void;
        toggleDynamicFlyoutContent(): void;
      }

      abstract class BaseComplexConditionInput extends BaseCondition {
        actAsAdvanced: boolean;
        allLabel: string;
        applyButtonText: string;
        cancelButtonText: string;
        filterTitle: string;
        notSetLabel: string;
        operators: Operator[];
        value: string;
        focus(): void;
        generateValue(): string;
        getCondition(): Condition[] | null;
        handleInputButtonClick(): void;
        hasEventOriginatedInsideElement(event: Event): boolean;
        resetCondition(): void;
        setCondition(conditions: Condition[] | null): void;
      }

      /**
       * This is the RWC grid's list condition input component.
       * <rwc-list-condition-input></rwc-list-condition-input>
       */
      class ListConditionInput extends BaseComplexConditionInput {
        andOperatorLabel: string;
        listData: any[];
        logicOperatorsVisible: boolean;
        orOperatorLabel: string;
        typeAheadFilterHidden: boolean;
        typeAheadFilterPlaceholder: string;
        resetListData(): void;
        setListData(newListData: any[]): void;
      }

      /**
       * @see <a href="./class/src/data-management/conditions/filter.js~Filter.html">Official Documentation</a>
       */
      class Filter {
        condition: Condition | Array<Condition>;
        field: string;
        isAdvanced: boolean;

        constructor(
          field: string,
          condition: Condition | Array<Condition>,
          isAdvanced: boolean
        );
      }

      /**
       * @see <a href="./class/src/data-management/conditions/operator.js~Operator.html">Official Documentation</a>
       */
      class Operator {
        /**
         * @desc Initializes a new instance of the Operator class.
         * @param {String} value Operator value.
         * @param {String} label Operator label.
         * @param {Boolean} isDefault Operator is selected.
         * @param {ConditionFormState} state Form state for given operator.
         * @param {String} ariaLabel Operator aria label.
         * @param {Boolean} isMultiListPicker Is multi list picker.
         */
        constructor(
          value?: string,
          label?: string,
          isDefault?: boolean,
          state?: ConditionFormState,
          ariaLabel?: string,
          isMultiListPicker?: boolean
        );
        _value: string;
        _label: string;
        _isDefault: boolean;
        _state: ConditionFormState;
        _ariaLabel: string;
        _isMultiListPicker: boolean;
        /**
         * @desc Gets operator value.
         * @returns {String} Operator value.
         */
        get value(): string;
        /**
         * @desc Sets operator label value.
         * @param {String} value Operator label value.
         */
        set label(arg: string);
        /**
         * @desc Gets operator label.
         * @returns {String} Operator label.
         */
        get label(): string;
        /**
         * @desc Gets if operator is selected.
         * @returns {Boolean} Operator is selected.
         */
        get isDefault(): boolean;
        /**
         * @desc Gets form state for given operator.
         * @returns {ConditionFormState} Form state.
         */
        get state(): ConditionFormState;
        /**
         * @desc Sets operator aria label value.
         * @param {String} value Operator aria label value.
         */
        set ariaLabel(arg: string);
        /**
         * @desc Get operator aria label.
         * @returns {String} Operator aria label value.
         */
        get ariaLabel(): string;
        /**
         * @desc Sets operator aria label value.
         * @param {String} value Operator aria label value.
         */
        set isMultiListPicker(arg: string);
        /**
         * @desc Get operator aria label.
         * @returns {String} Operator aria label value.
         */
        get isMultiListPicker(): string;
      }

      /**
       * @desc Predefined operators.
       */
      class Operators {
        /**
         * @desc Defines "any of these" operator.
         * @returns {Operator} Returns "any of these" operator.
         */
        static get anyOfThese(): Operator;
        /**
         * @desc Defines "between" operator.
         * @returns {Operator} Returns "between" operator.
         */
        static get between(): Operator;
        /**
         * @desc Defines "none of these" operator.
         * @returns {Operator} Returns "none of these" operator.
         */
        static get noneOfThese(): Operator;
        /**
         * @desc Defines "all of these" operator.
         * @returns {Operator} Returns "all of these" operator.
         */
        static get allOfThese(): Operator;
        /**
         * @desc Defines "not all of these" operator.
         * @returns {Operator} Returns "not all of these" operator.
         */
        static get notAllOfThese(): Operator;
        /**
         * @desc Defines "is" operator.
         * @returns {Operator} Returns "is" operator.
         */
        static get is(): Operator;
        /**
         * @desc Defines "is in" operator.
         * @returns {Operator} Returns "is in" operator.
         */
        static get isIn(): Operator;
        /**
         * @desc Defines "is not" operator.
         * @returns {Operator} Returns "is not" operator.
         */
        static get isNot(): Operator;
        /**
         * @desc Defines "is set" operator.
         * @returns {Operator} Returns "is set" operator.
         */
        static get isSet(): Operator;
        /**
         * @desc Defines "is not set" operator.
         * @returns {Operator} Returns "is set" operator.
         */
        static get isNotSet(): Operator;
        /**
         * @desc Defines "is less than" operator.
         * @returns {Operator} Returns "is less than" operator.
         */
        static get isLessThan(): Operator;
        /**
         * @desc Defines "is less than or equal to" operator.
         * @returns {Operator} Returns "is less than or equal to" operator.
         */
        static get isLessThanOrEqualTo(): Operator;
        /**
         * @desc Defines "is greater than" operator.
         * @returns {Operator} Returns "is greater than" operator.
         */
        static get isGreaterThan(): Operator;
        /**
         * @desc Defines "is greater than or equal to" operator.
         * @returns {Operator} Returns "is greater than or equal to" operator.
         */
        static get isGreaterThanOrEqualTo(): Operator;
        /**
         * @desc Defines "is like" operator.
         * @returns {Operator} Returns "is like" operator.
         */
        static get isLike(): Operator;
        /**
         * @desc Defines "is not like" operator.
         * @returns {Operator} Returns "is not like" operator.
         */
        static get isNotLike(): Operator;
      }
      /**
       * @desc Predefined date operator "is in" choices.
       */
      class DateIsInChoices {
        /**
         * @desc Defines "thisWeek" choice.
         * @returns {String} Returns "thisWeek" choice.
         */
        static get thisWeek(): string;
        /**
         * @desc Defines "thisMonth" choice.
         * @returns {String} Returns "thisMonth" choice.
         */
        static get thisMonth(): string;
        /**
         * @desc Defines "nextWeek" choice.
         * @returns {String} Returns "nextWeek" choice.
         */
        static get nextWeek(): string;
        /**
         * @desc Defines "lastWeek" choice.
         * @returns {String} Returns "lastWeek" choice.
         */
        static get lastWeek(): string;
        /**
         * @desc Defines "last7Days" choice.
         * @returns {String} Returns "last7Days" choice.
         */
        static get last7Days(): string;
        /**
         * @desc Defines "last30Days" choice.
         * @returns {String} Returns "last30Days" choice.
         */
        static get last30Days(): string;
        /**
         * @desc Defines "month" choice.
         * @returns {String} Returns "month" choice.
         */
        static get month(): string;
      }
    }

    namespace formatters {
      interface CustomOptions {
        format: (content: any, dataItem: any) => any;
      }

      interface DateTimeOptions {
        errorText: string;
        includeSeconds: boolean;
        isUTC: boolean;
        locale: string;
        includeTime: boolean;
        localeCallback: () => void;
        useLocaleCallback: boolean;
      }

      interface HtmlTextOptions {}

      interface LinkOptions {
        onClick?: (dataItem: any) => void;
        target?: string;
        urlLocation?: string;
      }

      interface MultiValueOptions {
        idLocation: string;
        dataLocation: string;
        delimiter: string;
        maxValues: number;
        formatCallback: (id: any, data: any) => any;
      }

      type FormatOptions =
        | CustomOptions
        | DateTimeOptions
        | HtmlTextOptions
        | LinkOptions
        | MultiValueOptions;

      interface FormatDefinition {
        name: string;
        options: FormatOptions;
      }

      class Custom {
        constructor({
          format,
        }: {
          format: (content: string, data, any) => any;
        });

        format(content: any, dataItem: any): any;
      }
    }

    namespace grid {
      namespace CommandColumnType {
        const MULTI_SELECTION: string;
        const SINGLE_SELECTION: string;
      }

      namespace columnIndicators {
        namespace SortDirection {
          const ASC: string;
          const DESC: string;
        }
      }

      /**
       * @see <a href="./class/src/data-management/grid/cell-content.js~CellContent.html">Official Documentation</a>
       */
      class CellContent {
        dataLocation: string;
        formatDefinitions: null | Array<Object>;
        getFormatDefinition(name: string): null | Object;
      }

      /**
       *  @see <a href="./class/src/data-management/grid/column-definition.js~ColumnDefinition.html">Official Documentation</a>
       */
      class ColumnDefinition {
        contentAlignment: CellContentAlignment;
        content: any;
        expandable: boolean;
        id: string;
        resizable: boolean;
        separatorVisible: boolean;
        title: string;
        width: number;
      }

      class HeaderContent {
        contentAlignment: CellContentAlignment;
        toolbarContent: Element;
      }

      const enum CellContentAlignment {
        LEFT = 0,
        CENTER = 1,
        RIGHT = 2,
      }
    }

    namespace itemList {
      type ItemListEvent<T> = Event & {
        detail: T;
      };

      type DataRequestEventDetails = {
        sorts: Sort[];
        filters: dataManagement.conditions.Filter[];
        pageSize: number;
        startIndex: number;
      };

      type FilterChangeEventDetails = {
        dataLocation: string;
        filters: dataManagement.conditions.Filter[];
      };

      type GetFilterDataEventDetails = {
        dataLocation: string;
      };

      /**
       * @see <a href="./class/src/data-management/item-list/item-list-column.js~ItemListColumn.html">Official Documentation</a>
       */
      class ItemListColumn extends grid.ColumnDefinition {
        containerClass: string;
        content: grid.CellContent;
        filter: conditions.Filter;
        filterAdvanced: boolean;
        filterAriaLabel: string;
        filterOperatorAriaLabel: string;
        filterOperators: Array<conditions.Operator>;
        filterTitle: string;
        filterable: boolean;
        headerContent: grid.HeaderContent;
        highlighted: boolean;
        id: string;
        sortTitle: string;
        sortable: boolean;
        resizable: boolean;
        title: string;
        width: number;
      }

      /**
       * @see <a href="./class/src/data-management/item-list/text-column.js~TextColumn.html">Official Documentation</a>
       */
      class TextColumn extends ItemListColumn {}

      /**
       * @see <a href="./class/src/data-management/item-list/date-time-column.js~DateTimeColumn.html">Official Documentation</a>
       */
      class DateTimeColumn extends ItemListColumn {
        includeTime: boolean;
        locale: string;
        localeCallback: Function;
      }

      /**
       *  @see <a href="./class/src/data-management/item-list/number-column.js~NumberColumn.html">Official Documentation</a>
       */
      class NumberColumn extends ItemListColumn {
        /**
         * Sets locale.
         * @param {String} value New locale to set.
         */
        set locale(value: string);
        /**
         * Gets locale.
         * @returns {String} Current locale of the filter.
         */
        get locale(): string;
      }

      class MultiValueColumn extends ItemListColumn {
        setupFilterElement(filter: any): void;
      }

      class SingleValueColumn extends ItemListColumn {
        setupFilterElement(filter: any): void;
      }

      /**
       * @see <a href="./manual/example/item-list.html">Extended example of using an ItemList</a>
       * @see <a href="./class/src/data-management/item-list/item-list.js~ItemList.html">Official Documentation</a>
       */
      class ItemList extends HTMLElement {
        actionBarTheme: string;
        bottomActionBarVisible: boolean;
        clearFiltersButtonDisabled: boolean;
        clearFiltersButtonTitle: string;
        clearFiltersButtonVisible: boolean;
        columns: ItemListColumn[];
        commandColumnType: string;
        data: any;
        filtersButtonTitleOff: string;
        filtersButtonTitleOn: string;
        filtersButtonVisible: boolean;
        filtersVisible: boolean;
        focus(): void;
        focusFilterElement(columnDataLocation: string): void;
        focusRowColumn(rowKey: string, columnDataLocation: string): void;
        gridContentWidth: number;
        gridErrorMessage: boolean;
        gridNoDataText: string;
        gridShowError: boolean;
        gridStyleButtonTitleOff: string;
        gridStyleButtonTitleOn: string;
        gridStyleButtonVisible: boolean;
        gridStyleVisible: boolean;
        height: string;
        itemIndexBase: number;
        loading: boolean;
        loadingRowCount: number;
        loadingText: string;
        locale: string;
        localeCallback: Function;
        maxGridHeight: string;
        noContainer: boolean;
        pagerItemsPerPage: Array<number>;
        pagerVisible: boolean;
        removeOffPageSelectedKeys: boolean;
        resetColumnWidthButtonTitle: string;
        resetColumnWidthButtonVisible: boolean;
        rowKeyName: string;
        selectedKey: number;
        selectedKeys: Array<number>;
        showFullError: boolean;
        showRowNumberColumn: boolean;
        sortedAscendingLabelText: string;
        sortedDescendingLabelText: string;
        theme: string;
        width: string;
        getState(): ItemListState;
        getPagerState(): navigation.pager.PagerState;
        setState(itemListState: ItemListState): void;
        setLoadingState(): void;
      }

      /**
       * @see <a href="./class/src/data-management/item-list/item-list-state.js~ItemListState.html">Official Documentation</a>
       */
      class ItemListState {
        data: Array<Object>;
        filters: Array<conditions.Filter>;
        pageSize: number;
        sorts: Array<Sort>;
        startIndex: number;
        totalItems: number;
      }

      /**
       * @see <a href="./class/src/data-management/item-list/sort.js~Sort.html">Official Documentation</a>
       */
      class Sort {
        column: string;
        direction: "asc" | "desc" | null;

        constructor(column: string, direction: string);
      }
    }

    namespace multiListPicker {
      class MultiListPickerState {
        availableList: itemList.ItemListState;
        selectedList: itemList.ItemListState;
        selectedKeys: string[];
      }

      class MultiListPicker extends HTMLElement {
        availableItemListFiltersVisible: boolean;
        availableListLoading: boolean;
        columns: itemList.ItemListColumn[];
        error: boolean;
        errorMessage: string;
        invalid: boolean;
        rowKeyName: string;
        selectedItemListFiltersVisible: boolean;
        selectedListLoading: boolean;
        showRowNumberColumn: boolean;
        theme: string;
        validationMessage: string;

        setState(itemListState: MultiListPickerState): void;
        getAvailableListColumn(
          columnDataLocation: string
        ): grid.ColumnDefinition;
        getSelectedListColumn(
          columnDataLocation: string
        ): grid.ColumnDefinition;
      }
    }
  }

  namespace dataVisualization {
    namespace leaderboardItem {
      class LeaderboardItem extends HTMLElement {
        titleText: string;
        tooltipText: string;
      }
    }

    namespace progressBar {
      /**
       * @desc This is the RWC Progress Bar component.
       * @example
       * <rwc-progress-bar></rwc-progress-bar>
       * @see <a href="./manual/example/progress-bar.html">Extended example of using progress bar.</a>
       */
      class ProgressBar extends HTMLElement {
        ariaHidden: boolean;
        caption: string;
        completionAriaValueText: string;
        elapsedTime: number;
        elapsedTimeAriaValueText: string;
        errorMessage: string;
        estimatedTime: number;
        estimatedTimeText: string;
        indeterminateStateAriaValueText: string;
        showElapsedTime: boolean;
        showEstimatedTime: boolean;
        showPercentage: boolean;
        smallBar: boolean;
        state: string;
        theme: string;
        throttle: boolean;
        throttletimme: number;
        timeTranslations: [];
        value: number;
      }
    }

    namespace messageContainer {
      const enum MessageContainerTheme {
        information = "information",
        warning = "warning",
        error = "error",
        success = "success",
      }

      /**
       * @desc This is the RWC Category component
       * @example
       * <rwc-message-container></rwc-message-container>
       * @see <a href="./manual/example/message-container.html">Example of usage of rwc-message-container components</a>
       */
      class MessageContainer extends HTMLElement {
        messageCollectionTitle: string;
        messageCollectionTitlePrefix: string;
        messages: string | string[];
        messageIconAriaLabel: string;
        theme: MessageContainerTheme;
      }
    }

    namespace progressStatus {
      /**
       * @desc This is the RWC Progress Status component.
       * @example
       * <rwc-progress-status></rwc-progress-status>
       * @see <a href="./manual/example/progress-status.html">Extended example of using progress status</a>
       */
      class ProgressStatus extends HTMLElement {
        stepDetails: Element | null;
        createSteps(stepsData: Object | String): void;
        steps: progressSteps.ProgressSteps;
      }

      namespace progressSteps {
        /**
         * @desc This is the RWC progress steps component.
         * @example
         * <rwc-progress-steps></rwc-progress-steps>
         * @see <a href="./manual/example/progress-status.html#progress-steps">Extended example of using progress steps</a>
         */
        class ProgressSteps extends HTMLElement {
          editSteps(stepsInfo: Object): void;
          appendSteps(stepsInfo: Object): void;
        }

        /**
         * @desc This is the RWC progress step component.
         * @example
         * <rwc-progress-step></rwc-progress-step>
         * @see <a href="./manual/example/progress-status.html#progress-steps">Extended example of using progress step within progress steps</a>
         */
        class ProgressStep extends HTMLElement {}
      }
    }

    namespace treeView {
      /**
       * @desc This is the RWC tree node state component.
       * @example <rwc-tree-node-state></rwc-tree-node-state>
       * @see Oh you thought there was documentation? Think again haha
       */
      class TreeNodeState extends HTMLElement {
        /**
         * Error state of the component.
         */
        error: boolean;
        /**
         * Handler which is executed on button click that appears when node is in error state.
         */
        errorButtonOnClick(): void;
        /**
         * Loading state indicator.
         */
        loading: boolean;
        /**
         * Indicates whether the component is used in the root or in a node.
         */
        root: boolean;
      }

      /**
       * @desc This is the RWC tree node component.
       * @example <rwc-tree-node></rwc-tree-node>
       * @see <a href="./manual/example/tree.html">Extended example of using a tree component</a>
       */
      class TreeNode extends HTMLElement {
        branch: boolean;
        error: boolean;
        errorButtonOnClick: Function;
        expanded: boolean;
        iconName: string;
        isLast: boolean;
        lazy: boolean;
        loading: boolean;
        nodeTitle: string;
        appendElement(markup: string): void;
        appendNodes(nodesInfo: TreeNode[]): void;
        editNodes(nodesInfo: any): void;
        getChildNode(number: number): TreeNode | undefined;
        refreshTreeNodes(): void;
        removeNodes(nodesNumbers: number[]): void;
      }

      /**
       * @desc This is the RWC tree component.
       * @example <rwc-tree></rwc-tree>
       * @see <a href="./manual/example/tree.html">Extended example of using a tree component</a>
       */
      class Tree extends TreeNode {
        allExpanded: boolean;
        rootError: boolean;
        rootLoading: boolean;
        focus(): void;
        setDefaultErrorHandler(errorHandler: Function): void;
        toggleCollapseAll(): void;
      }
    }
  }

  declare namespace layout {
    namespace category {
      /**
       * @desc This is the RWC Category component
       * @example
       * <rwc-category></rwc-category>
       * @see <a href="./manual/example/category.html">Example of usage of rwc-category components</a>
       */
      class Category extends HTMLElement {
        categoryTitle: string;
        collapse: boolean;
        collapseCategoryIconTitle: string;
        collapsible: boolean;
        expandCategoryIconTitle: string;
        hideHeader: boolean;
        loading: boolean;
        noContainer: boolean;
        required: boolean;
        toggleLoadingState(): boolean;
      }

      /**
       * @desc <rwc-category-row></rwc-category-row>
       */
      class CategoryRow extends HTMLElement {}

      /**
       * @desc <rwc-category-column></rwc-category-column>
       */
      class CategoryColumn extends HTMLElement {
        colspan: number;
      }
    }

    declare namespace modalLayout {
      /**
       * This is the RWC Modal Layout component.
       * @example
       * <rwc-modal-layout></rwc-modal-layout>
       *
       * @see <a href="./manual/example/modal-layout.html">Extended example of using a Modal Layout component</a>
       */
      class ModalLayout extends HTMLElement {}
    }

    declare namespace tab {
      class Tab extends HTMLElement {
        active: boolean;
        required: boolean;
        ariaLabel: string;
      }
    }

    declare namespace breadcrumb {
      class CrumbContent {
        formatDefinitions: dataManagement.formatters.FormatDefinition[];
        formatters: any;
        content: string;
        truncatable: boolean;
      }

      class BreadcrumbLayout {
        partition: string;
        partitionFormatDefinitions: dataManagement.formatters.FormatDefinition[];
      }
    }
  }

  namespace navigation {
    namespace pager {
      /**
       * @see <a href="./class/src/navigation/pager/pager-state.js~PagerState.html">Official Documentation</a>
       */
      class PagerState {
        pageSize: number;
        startIndex: number;
        totalItems: number;
      }
    }
  }

  namespace number {}

  namespace utilities {
    namespace type {
      function typeOf(param: object | boolean | number | string): Function;
    }
  }
}
