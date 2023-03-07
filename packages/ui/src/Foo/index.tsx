import React, { type FC } from 'react';
import {testRedirect} from '@root/services'

console.log(testRedirect)
const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default Foo;
