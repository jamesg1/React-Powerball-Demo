import { GlobalWithFetchMock } from 'jest-fetch-mock';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

Enzyme.configure({ adapter: new Adapter() });
