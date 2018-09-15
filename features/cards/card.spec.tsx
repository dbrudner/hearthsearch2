/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import Card from "./card";

describe("Jest/Enzyme", () => {
	it("runs a test", () => {
		const wrapper = shallow(<Card />);
		expect(1).toEqual(1);
	});
});
