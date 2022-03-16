export interface NavListItem {
    subCategoryName: string;
    subCategoryLink: string;
    subCategoryQuery?: any;
    visable: boolean;
  }

  export class NavList {
    categoryName: string;
    icon: string;
    dropDown: boolean;
    subCategory: NavListItem[];
    constructor(
      _categoryName: string,
      _icon: string,
      _dropDown: boolean,
      _subCategory: NavListItem[]
    ) {
      this.categoryName = _categoryName;
      this.icon = _icon;
      this.dropDown = _dropDown;
      this.subCategory = _subCategory;
    }
  }