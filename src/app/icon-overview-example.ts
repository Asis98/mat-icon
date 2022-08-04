import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * @title Basic icons
 */
@Component({
  selector: 'icon-overview-example',
  templateUrl: 'icon-overview-example.html',
})
export class IconOverviewExample {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'unicorn',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/accordion-chevron.svg'
      )
    );
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
