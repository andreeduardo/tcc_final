import { TestBed, inject } from '@angular/core/testing';

import { CadastrarService } from './cadastrar.service';

describe('CadastrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrarService]
    });
  });

  it('should be created', inject([CadastrarService], (service: CadastrarService) => {
    expect(service).toBeTruthy();
  }));
});
