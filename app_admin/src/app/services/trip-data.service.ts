import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Trip } from '../models/Trip';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  private tripUrl = `${this.apiBaseUrl}/trips`;

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

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService.addTrip()...")
    const url: string = `${this.apiBaseUrl}/trips`;
    try {
      return this.http
        .post(url, formData)
        .toPromise()
        .then(response => response.json() as Trip[])
        .catch(this.handleError);
    } catch (error) {
      return this.handleError(error);
    }

  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#upateTrip');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
