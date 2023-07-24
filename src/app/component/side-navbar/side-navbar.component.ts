import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, IsActiveMatchOptions, Params, ActivatedRoute, NavigationEnd, UrlSegment } from '@angular/router';
import { navbarList } from '../navbarlist';
import { DomSanitizer } from '@angular/platform-browser';
import { sideNavbar } from 'src/constant/sidenavbar';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit,OnDestroy{
  @Input() item !: boolean;
  navbarList :any =[];
  navbarList2:any =[];
  href: string = '';
  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
    // private location: Location
  ) { }
 
  ngOnInit() {
    navbarList.forEach((menu:any) => {
      
      menu.svg = this.sanitizer.bypassSecurityTrustHtml(menu.menuIcon);
      // his.style = this.sanitizer.bypassSecurityTrustHtml(this.responseData[1].element);
    })
    this.navbarList = navbarList;
    this.navbarList2 = sideNavbar
    console.log(this.item, 'item');
    this.ongetParams()

  }
  matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'subset',
    fragment: 'ignored'
  };
  getMenuActiveStatus(type: string) {
    const menuType = type || '';

    // this.log.log('buyer : ', this.router.isActive('/app/buyer/on-board-buyer', this.matchOptions));

    switch (menuType) {
      case 'DashBoard':
        return this.router.isActive('/dashBoard', this.matchOptions) || this.router.isActive('/home', this.matchOptions);
      case 'Orders':
        return this.router.isActive('/orders', this.matchOptions) || this.router.isActive('/app/buyer/invoice', this.matchOptions) || this.router.isActive('/app/buyer/manage', this.matchOptions) || this.router.isActive('/app/buyer/buyer-details', this.matchOptions) || this.router.isActive('/app/buyer/buyer-branch', this.matchOptions) || this.router.isActive('/app/buyer/branch-details', this.matchOptions) || this.router.isActive('/app/buyer/returned-order', this.matchOptions)
          || this.router.isActive('/app/buyer/return-order-detail', this.matchOptions);
      case 'Seller':
        return this.router.isActive('/dashboard', this.matchOptions) || this.router.isActive('/app/seller/manage', this.matchOptions) || this.router.isActive('/app/seller/purchase', this.matchOptions) || this.router.isActive('/app/seller/branch-list', this.matchOptions) || this.router.isActive('/app/seller/branch-details', this.matchOptions) || this.router.isActive('/app/seller/seller-detail', this.matchOptions);
      case 'Catalog':
        return this.router.isActive('/app/catalog/categories', this.matchOptions) || this.router.isActive('/app/catalog/product', this.matchOptions) || this.router.isActive('/app/catalog/add-product', this.matchOptions) || this.router.isActive('/app/catalog/category-product', this.matchOptions) || this.router.isActive('/app/catalog/add-category', this.matchOptions)
          || this.router.isActive('/app/catalog/seller-import-product', this.matchOptions)
          || this.router.isActive('/app/catalog/catalog-product-detail', this.matchOptions)
          || this.router.isActive('/app/catalog/product-pricing', this.matchOptions)
          || this.router.isActive('/app/catalog/import-product-pricing', this.matchOptions);
      case 'finance':
        return this.router.isActive('/app/finance', this.matchOptions) || this.router.isActive('/app/finance/markup', this.matchOptions) || this.router.isActive('/app/finance/markdown', this.matchOptions) || this.router.isActive('/app/finance/seller-list', this.matchOptions) || this.router.isActive('/app/finance/product-list', this.matchOptions)
      case 'Products':
        return this.router.isActive('/app/products', this.matchOptions) || this.router.isActive('/app/products/product-details', this.matchOptions) ||
          this.router.isActive('/app/products/enable-products', this.matchOptions) ||
          this.router.isActive('/app/products/disable-products', this.matchOptions) || this.router.isActive('/app/products/view-product', this.matchOptions) || this.router.isActive('/app/products/edit-product', this.matchOptions);
      case 'promotion':
        return this.router.isActive('app/promotions', this.matchOptions) || this.router.isActive('app/promotions/categorydiscount', this.matchOptions) || this.router.isActive('app/promotions/productdiscount', this.matchOptions) || this.router.isActive('app/promotions/buyerdiscount', this.matchOptions) || this.router.isActive('app/promotions/sellerdiscount', this.matchOptions)
          || this.router.isActive('app/promotions/edit-promotion', this.matchOptions);
      case 'orders':
        return this.router.isActive('app/orders', this.matchOptions) || this.router.isActive('app/orders/order-detail', this.matchOptions) || this.router.isActive('app/orders/order-seller-detail', this.matchOptions)
      case 'product-list-configuration':
        return this.router.isActive('app/product-list-configuration', this.matchOptions) || this.router.isActive('app/product-list-configuration/category-product', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/add-category-sort-order', this.matchOptions) || this.router.isActive('app/product-list-configuration/subcategory-product', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/add-subcategory-sort-order', this.matchOptions) || this.router.isActive('app/product-list-configuration/product-listing', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/product-listing-detail', this.matchOptions) || this.router.isActive('/app/product-list-configuration/attributes', this.matchOptions) || this.router.isActive('/app/product-list-configuration/add-attributes', this.matchOptions)
          || this.router.isActive('/app/product-list-configuration/cash-on', this.matchOptions);
      case 'user':
        return this.router.isActive('app/users', this.matchOptions) || this.router.isActive('app/users/user-role', this.matchOptions);
      case 'integration':
        return this.router.isActive('app/integration', this.matchOptions) || this.router.isActive('app/integration/deliverypatner', this.matchOptions) || this.router.isActive('app/integration/add-delivery-patner', this.matchOptions);
      default:
        return false;
    }
  }
  getSubMenuActiveStatus(type:string){
    const menuType = type || '';
    switch (menuType) {
      case 'dashBoard':
        return this.router.isActive('/dashBoard', this.matchOptions) || this.router.isActive('/home', this.matchOptions);
      case 'Orders':
        return this.router.isActive('/orders', this.matchOptions) || this.router.isActive('/app/buyer/invoice', this.matchOptions) || this.router.isActive('/app/buyer/manage', this.matchOptions) || this.router.isActive('/app/buyer/buyer-details', this.matchOptions) || this.router.isActive('/app/buyer/buyer-branch', this.matchOptions) || this.router.isActive('/app/buyer/branch-details', this.matchOptions) || this.router.isActive('/app/buyer/returned-order', this.matchOptions)
          || this.router.isActive('/app/buyer/return-order-detail', this.matchOptions);
      case 'Seller':
        return this.router.isActive('/dashboard', this.matchOptions) || this.router.isActive('/app/seller/manage', this.matchOptions) || this.router.isActive('/app/seller/purchase', this.matchOptions) || this.router.isActive('/app/seller/branch-list', this.matchOptions) || this.router.isActive('/app/seller/branch-details', this.matchOptions) || this.router.isActive('/app/seller/seller-detail', this.matchOptions);
      case 'Catalog':
        return this.router.isActive('/app/catalog/categories', this.matchOptions) || this.router.isActive('/app/catalog/product', this.matchOptions) || this.router.isActive('/app/catalog/add-product', this.matchOptions) || this.router.isActive('/app/catalog/category-product', this.matchOptions) || this.router.isActive('/app/catalog/add-category', this.matchOptions)
          || this.router.isActive('/app/catalog/seller-import-product', this.matchOptions)
          || this.router.isActive('/app/catalog/catalog-product-detail', this.matchOptions)
          || this.router.isActive('/app/catalog/product-pricing', this.matchOptions)
          || this.router.isActive('/app/catalog/import-product-pricing', this.matchOptions);
      case 'finance':
        return this.router.isActive('/app/finance', this.matchOptions) || this.router.isActive('/app/finance/markup', this.matchOptions) || this.router.isActive('/app/finance/markdown', this.matchOptions) || this.router.isActive('/app/finance/seller-list', this.matchOptions) || this.router.isActive('/app/finance/product-list', this.matchOptions)
      case 'Products':
        return this.router.isActive('/app/products', this.matchOptions) || this.router.isActive('/app/products/product-details', this.matchOptions) ||
          this.router.isActive('/app/products/enable-products', this.matchOptions) ||
          this.router.isActive('/app/products/disable-products', this.matchOptions) || this.router.isActive('/app/products/view-product', this.matchOptions) || this.router.isActive('/app/products/edit-product', this.matchOptions);
      case 'promotion':
        return this.router.isActive('app/promotions', this.matchOptions) || this.router.isActive('app/promotions/categorydiscount', this.matchOptions) || this.router.isActive('app/promotions/productdiscount', this.matchOptions) || this.router.isActive('app/promotions/buyerdiscount', this.matchOptions) || this.router.isActive('app/promotions/sellerdiscount', this.matchOptions)
          || this.router.isActive('app/promotions/edit-promotion', this.matchOptions);
      case 'orders':
        return this.router.isActive('app/orders', this.matchOptions) || this.router.isActive('app/orders/order-detail', this.matchOptions) || this.router.isActive('app/orders/order-seller-detail', this.matchOptions)
      case 'product-list-configuration':
        return this.router.isActive('app/product-list-configuration', this.matchOptions) || this.router.isActive('app/product-list-configuration/category-product', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/add-category-sort-order', this.matchOptions) || this.router.isActive('app/product-list-configuration/subcategory-product', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/add-subcategory-sort-order', this.matchOptions) || this.router.isActive('app/product-list-configuration/product-listing', this.matchOptions) ||
          this.router.isActive('app/product-list-configuration/product-listing-detail', this.matchOptions) || this.router.isActive('/app/product-list-configuration/attributes', this.matchOptions) || this.router.isActive('/app/product-list-configuration/add-attributes', this.matchOptions)
          || this.router.isActive('/app/product-list-configuration/cash-on', this.matchOptions);
      case 'user':
        return this.router.isActive('app/users', this.matchOptions) || this.router.isActive('app/users/user-role', this.matchOptions);
      case 'integration':
        return this.router.isActive('app/integration', this.matchOptions) || this.router.isActive('app/integration/deliverypatner', this.matchOptions) || this.router.isActive('app/integration/add-delivery-patner', this.matchOptions);
      default:
        return false;
    }
  }

  ongetParams() {
    const currentUrl: any = location.href;
    const splitUrl = currentUrl.split('/');

    console.log('Current URL:', currentUrl);
    console.log('split URL:', splitUrl[splitUrl.length -1]);

  }

  ngOnDestroy(): void {
  }
}
