import React, { useRef, useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';

import {
  SafeAreaView,
  View
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

function Home(): React.JSX.Element {

    const [search, setSearch] = useState('');

	const [stateValue, setStateValue] = useState(null);

    const updateSearch = (search: string) => {
        console.log(search);
        setSearch(search);
    }

	const [open1, setOpen1] = useState(false);
	  const [value1, setValue1] = useState(null);
	  const [items1, setItems1] = useState([
		{ label: 'Option A', value: 'optionA' },
		{ label: 'Option B', value: 'optionB' },
		{ label: 'Option C', value: 'optionC' },
	  ]);

	  const [open2, setOpen2] = useState(false);
	  const [value2, setValue2] = useState(null);
	  const [items2, setItems2] = useState([
		{ label: 'Option A', value: 'optionA' },
		{ label: 'Option B', value: 'optionB' },
		{ label: 'Option C', value: 'optionC' },
	  ]);

    return (
    	<SafeAreaView>
			<View>
				<SearchBar
					platform="android"
					placeholder="Type Here..."
					onChangeText={updateSearch}
					value={search}
				/> 
			</View>
			<View  style={{ flexDirection: 'row' }}>
				<View>
				<DropDownPicker
						open={open1}
						value={value1}
						items={items1}
						style={{width: '65%'}}
						setOpen={setOpen1}
						placeholder='Select City'
						setValue={setValue1}
						setItems={setItems1}
					/>  
				</View>
				<View>
					<DropDownPicker
						open={open2}
						value={value2}
						items={items2}
						style={{width: '55%'}}
						setOpen={setOpen2}
						placeholder='Select City'
						setValue={setValue2}
						setItems={setItems2}
					/>  
				</View>
			</View> 
		</SafeAreaView>
    );
}

export default Home;
