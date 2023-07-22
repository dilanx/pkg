import { isNodeAuthorized } from '../../packages/access-nodes';

test('normal nodes', () => {
  const userAccessNodes = ['test.a.b', 'test.a.b.c'];

  expect(isNodeAuthorized(userAccessNodes, 'test.a.b')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c.d')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.d')).toBe(false);
});

test('wildcards', () => {
  const userAccessNodes = ['test.a.b.*', 'test2.a.*'];

  expect(isNodeAuthorized(userAccessNodes, 'test.a.b')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c.d')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.d')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.c.b')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.c.b.d')).toBe(false);

  expect(isNodeAuthorized(userAccessNodes, 'test2.a')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test2.a.b')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test2.a.b.c')).toBe(true);
  expect(isNodeAuthorized(userAccessNodes, 'test2.a.b.c.d')).toBe(true);

  userAccessNodes.push('test2.a');
  expect(isNodeAuthorized(userAccessNodes, 'test2.a')).toBe(true);
});

test('no nodes', () => {
  const userAccessNodes = [];

  expect(isNodeAuthorized(userAccessNodes, 'test.a')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.c.d')).toBe(false);
  expect(isNodeAuthorized(userAccessNodes, 'test.a.b.d')).toBe(false);
});
