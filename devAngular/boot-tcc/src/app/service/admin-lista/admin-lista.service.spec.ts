import { TestBed, inject } from '@angular/core/testing';

import { AdminListaService } from './admin-lista.service';

describe('AdminListaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminListaService]
    });
  });

  it('should be created', inject([AdminListaService], (service: AdminListaService) => {
    expect(service).toBeTruthy();
  }));
});
