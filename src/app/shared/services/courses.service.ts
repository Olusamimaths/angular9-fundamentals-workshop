import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private model = 'courses';

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course) {
    console.log('Create course', course);
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('Update course', course);
    return this.http.put(this.getUrlById(course.id), course);
  }

  delete(courseId) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
