import { TestBed } from '@angular/core/testing';

import { ElectionProgramService } from './election-program.service';

describe('ElectionProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionProgramService = TestBed.get(ElectionProgramService);
    expect(service).toBeTruthy();
  });
});
