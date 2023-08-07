import { useEffect, useState } from 'react';
import { ConfigProvider, Table, theme } from 'antd';
import axios from 'axios';
import './App.css';
import { ReactComponent as Logo } from './assets/logo.svg';
import createColumns from './utils/createColumns';
import createRows from './utils/createRows';
import CustomDropdown from './components/dropdown/CustomDropdown';

function App() {
  const [table, setTable] = useState({ header: [], data: [] });
  const [tableId, setTableId] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(id) {
      setLoading(true);
      await axios
        .get(`/data/${id}`)
        .then((response) => {
          setLoading(false);
          setTable(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchData(tableId);
  }, [tableId]);

  const columns = createColumns(table);

  const rows = createRows(table.data, columns);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Button: {
            colorPrimaryHover: '#a61d24',
          },
          Dropdown: {
            colorPrimary: 'unset',
            controlItemBgActive: '#e84749',
            controlItemBgActiveHover: '#2a1215',
          },
        },
      }}
    >
      <header>
        <Logo />
        <span>Тестовое задание</span>
      </header>

      <div className="wrapper">
        <CustomDropdown setTableId={setTableId} />

        <Table
          locale={{
            triggerDesc: 'Сортировка по возрастанию',
            triggerAsc: 'Сортировка по убыванию',
            cancelSort: 'Отменить сортировку',
          }}
          pagination={false}
          loading={loading}
          columns={columns}
          dataSource={rows}
        />
      </div>

      <footer>
        <span>Выполнил Давид Газиев</span>
      </footer>
    </ConfigProvider>
  );
}

export default App;
