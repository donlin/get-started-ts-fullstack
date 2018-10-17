import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  /**
   * Check if server is running
   */
  healthCheck() {
    return this.http.get('/api/health-check');
  }
}
