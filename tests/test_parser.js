import {parse} from '../';


describe('parser', () => {
  it('should parse conditions', () => {
    const res = parse("name ~ 'clementine'");
    res.should.eql({
      type: "Query",
      condition: {
        type: "Condition",
        key: "name",
        op: "CONTAINS",
        value: {
          type: "Literal",
          value: "clementine"
        }
      },
      modifier: null
    });
  });
  it('should parse binary conditions', () => {
    const res = parse("name ~ 'lol' AND age = 10");
  });
  it('should parse numbers', () => {
    const res = parse("cost >= 100.1");
  });
  it('should parse binary conditions', () => {
    const res = parse('project = "New office" and status = "open"');
  });
  it('should parse nested binary conditions', () => {
    const res = parse('status = open and priority = urgent and assignee = jsmith');
  });
  it('should parse not-equals', () => {
    const res = parse('project = JRA and assignee != jsmith');
  });
  it('should parse tuples', () => {
    const res = parse('project in (JRA,CONF) and fixVersion = "3.14"');
  });
  it('should parse tuples of numbers', () => {
    const res = parse('id in (2, 3, 4)');
  });
  it('should parse not-in', () => {
    const res = parse('reporter not in (Jack,Jill,John) and assignee not in (Jack,Jill,John)');
  });
  it('should parse order-by', () => {
    const res = parse('duedate = empty order by created');
  });
  it('should parse order-by with direction [desc]', () => {
    const res = parse('duedate = empty order by created desc');
  });
  it('should parse order-by with direction [asc]', () => {
    const res = parse('duedate = empty order by created asc');
  });
  it('should parse order-by with multiple ids', () => {
    const res = parse('duedate = empty order by created, priority desc');
  });
});
