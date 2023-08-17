import './AllProduct.scss'
import { Trace } from 'Components';
import { fakeListProduct } from 'data';
import { ListProduct } from 'Components';
import { Pagination, Select } from 'antd';


export default function AllProduct(props) {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const traceData = {
        data: ["Home", ...fakeListProduct.trace.split('\n')],
        route: ['/', ...fakeListProduct.type.split('\n')]
    };

    return (
        <div className='AllProduct container'>
            <div className='container-wrapper'>
                <Trace traceData={traceData} />
                <div className='content'>
                    <div>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            // onChange={ }
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                    <p>
                        {props.title ? props.title : traceData.data[traceData.data.length - 1]}
                    </p>
                    <div>
                        <ListProduct data={fakeListProduct.data} btn={false} />
                        <Pagination
                            showSizeChanger={false}
                            onShowSizeChange={onShowSizeChange}
                            defaultCurrent={1}
                            total={500}
                            className='pagination'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}