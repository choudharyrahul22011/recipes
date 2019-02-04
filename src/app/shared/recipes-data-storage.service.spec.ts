import { TestBed } from '@angular/core/testing';

import { RecipesDataStorageService } from './recipes-data-storage.service';

describe('RecipesDataStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesDataStorageService = TestBed.get(RecipesDataStorageService);
    expect(service).toBeTruthy();
  });
});
