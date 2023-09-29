import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface Services {
  serviceName: string;
  photo: string;
  id: number;
}

interface HttpRes {
  id: number;
  attributes: {
    serviceName: string;
    photo: {
      data: {
        attributes: { url: string };
      };
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class AvailableServicesService {
  constructor(private http: HttpClient) {}
  services: Services[] = [];
  async fetchServices() {
    try {
      const req = this.http.get<{ data: HttpRes[] }>(
        'http://localhost:1337/api/services?populate=photo'
      );
      const res = await lastValueFrom(req);

      this.services = res.data.map((element: HttpRes) => ({
        id: element.id,
        serviceName: element.attributes.serviceName,
        photo: element.attributes.photo.data.attributes.url,
      }));
      return { status: 200, data: this.services };
    } catch (error) {
      return { status: 500, error: error } as {
        status: 500;
        error: { error: { message: string } };
      };
    }
  }
}
