import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Trip } from '../models/Trip';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public async getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService.getTrips()...")
    const url: string = `${this.apiBaseUrl}/trips`;
    try {
      const response = await this.http
        .get(url)
        .toPromise();
      return response.json() as Trip[];
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
