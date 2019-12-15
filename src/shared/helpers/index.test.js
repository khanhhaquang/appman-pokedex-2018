import { getHp, getStr, getWeak, getDamage, getHappy } from './index';

describe('Test helper functions', () => {
	test('test getHp', () => {
		expect(getHp(-1)).toBeFalsy();
		expect(getHp(100)).toBeTruthy();
		expect(getHp(0)).toBeFalsy();
		expect(getHp(10123)).toBe(100);
	});

	test('test getStr', () => {
		expect(getStr(1)).toBe(50);
		expect(getStr(100)).toBe(0);
		expect(getStr(2)).toBe(100);
	});

	test('test getWeak', () => {
		expect(getWeak(1)).toBe(100);
		expect(getWeak(2)).toBe(0);
		expect(getWeak(0)).toBe(0);
	});

	test('test getDamage', () => {
		expect(getDamage([{ damage: '0' }])).toBe(0);
		expect(getDamage([{ damage: 'fasdf' }])).toBe(0);
		expect(getDamage([{ damage: '20+' }, { damage: '202+' }])).toBe(222);
		expect(getDamage([])).toBe(0);
	});

	test('test getHappy', () => {
		expect(getHappy(0, [], 0)).toBe(2);
		expect(getHappy(50, [], 0)).toBe(3);
	});
});
