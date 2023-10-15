var assert = require('assert');
const {safeJoin, getDoc, addDoc, editDoc} = require('./server.js');

describe('Tests for function safeJoin', () => {
	describe('Test Case 1 safeJoin',() => {
		it('should return the currentId', () => {
			assert.equal(safeJoin("ke9rAI3Ho1-sTiTQAAAA"),"ke9rAI3Ho1-sTiTQAAAA");
		});
	});
	describe('Test Case 2 safeJoin',() => {
		it('should return the currentId', () => {
			assert.equal(safeJoin("0Iw08wXy8fMuuuacAAAB"),"0Iw08wXy8fMuuuacAAAB");
		});
	});
});

describe('Tests for function getDoc', () => {
	describe('Test Case 1 getDoc',() => {
		it('should return the docId', () => {
			assert.equal(getDoc(1),1);
		});
	});
	describe('Test Case 2 getDoc',() => {
		it('should return the docId', () => {
			assert.equal(getDoc(2),2);
		});
	});
});

describe('Tests for function addDoc', () => {
	describe('Test Case 1 addDoc',() => {
		it('should return the doc', () => {
			assert.equal(addDoc(1),1);
		});
	});
	describe('Test Case 2 addDoc',() => {
		it('should return the doc', () => {
			assert.equal(addDoc(2),2);
		});
	});
});

describe('Tests for function editDoc', () => {
	describe('Test Case 1 editDoc',() => {
		it('should return the doc', () => {
			assert.equal(editDoc(1),1);
		});
	});
	describe('Test Case 2 editDoc',() => {
		it('should return the doc', () => {
			assert.equal(editDoc(2),2);
		});
	});
});