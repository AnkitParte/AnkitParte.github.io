import { FixedSizeList as List } from 'react-window';

const MyList = () => (
  <List
    height={500}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {({ index, style }) => <div style={style}>Item {index}</div>}
  </List>
);
