import { FilterPipe } from './filter.pipe';

//ng g pipe filter
describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
