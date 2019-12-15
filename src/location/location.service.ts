import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
    public list(): string[] {
        return [
            'location 1',
            'location 2',
            'location 3',
        ];
    }
}
