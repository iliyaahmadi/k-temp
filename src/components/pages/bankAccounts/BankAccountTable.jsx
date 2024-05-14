import React from 'react'
import accdata from '../../../../mock-bank-accounts.json'

const BankAccountTable = () => {
    // const [data, setData] = useState([]);
    // const [currentPageNumber, setCurrentPageNumber] = useState(1);
    // const [dataToDisplay, setDataToDisplay] = useState([]);

    //table data
    const stringdata = JSON.stringify(accdata)
    const data = JSON.parse(stringdata)


    return (
        <div className="relative w-full h-full ankTable-container shadow-md">
            <div className="overflow-x-auto rounded-lg">
                <table className="w-full h-fit text-sm text-center overflow-x-scroll text-nowrap text-gray-400">
                    <thead className="text-xs uppercase bg-gray-600 text-white">
                        <tr>
                            <th scope="col" className="px-4 py-6 text-center">
                                شبا
                            </th>
                            <th scope="col" className="px-4 py-6 text-center">
                                شماره حساب
                            </th>
                            <th scope="col" className="px-4 py-6 text-center">
                                شماره بانکی
                            </th>
                            <th scope="col" className="px-4 py-6 text-center">
                                عملیات
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((d, i) => {
                            return <tr key={i} className="bg-gray-700 text-white border-t border-gray-500 hover:bg-gray-600">
                                <th scope="row" className="px-5 py-5 font-medium whitespace-nowrap dark:text-white">
                                    {d.shaba}
                                </th>
                                <td className="px-4 py-4">
                                    {d.hesab}
                                </td>
                                <td className="px-4 py-4">
                                    {d.cart}
                                </td>
                                <td className="px-4 py-4">
                                    <button className='pr-4 pl-4 pt-1 pb-1 bg-red-600 rounded-lg hover:bg-red-500'>حذف</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"> نشان دادن
                    <span className="font-semibold text-thin text-white">1-10</span> از <span className="font-semibold text-thin text-white">1000</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">قبل</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">بعد</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default BankAccountTable