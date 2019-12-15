import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    service = new LocationService();
  });

  it('should return locations', () => {
    expect(service.list()).toMatchObject([
      'location 1',
      'location 2',
      'location 3',
    ]);
  });
});
