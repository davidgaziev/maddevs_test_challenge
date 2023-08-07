import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const CustomDropdown = ({ setTableId }) => {
  const dropdownOptions = [
    {
      key: 1,
      label: 'Первая таблица',
    },
    {
      key: 2,
      label: 'Вторая таблица',
    },
    {
      key: 3,
      label: 'Третья таблица',
    },
    {
      key: 4,
      label: 'Четвертая таблица',
    },
    {
      key: 5,
      label: 'Пятая таблица',
    },
  ];

  return (
    <div className="dropdown">
      <Dropdown
        trigger={['click']}
        menu={{
          items: dropdownOptions,
          selectable: true,
          defaultSelectedKeys: ['1'],
          onClick: ({ key }) => setTableId(key),
        }}
      >
        <Space>
          <Button>
            Выберите таблицу <DownOutlined />
          </Button>
        </Space>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
