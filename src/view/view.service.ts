import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MainService } from '../main/main.service';
import { ViewOptions } from '../models/view';

/**
 * view service for drupal using services_views module
 * @see https://www.drupal.org/project/services_views
 */
@Injectable()
export class ViewService extends MainService {
  entityType = 'views';

  private getViewArgs(options: ViewOptions): string {

    return '';
  }

  getView(viewMachineName: string, options: ViewOptions): Observable<any[]> {
    const args = this.getViewArgs(options);
    return this.get(viewMachineName, args);
  }

}
