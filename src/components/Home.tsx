import React, { useRef, useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import styles from '../../Styles';


import {
  SafeAreaView,
  ScrollView,
  ListRenderItem,
  FlatList,
  View
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Text, Card, Button, Icon } from '@rneui/themed';

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
	
	const card = [
		{ id : 1, title: 'Belmond', uri: 'https://unsplash.com/photos/a-couple-of-lawn-chairs-sitting-next-to-a-pool-iWmf9Gl3yMw', 
		content: 'This majestic 5-star resort sits at a stunning elevation of 2000 feet above the city, in a restored 1894 palace.'},

		{ id : 2, title: 'Bulgari', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg', 
		content: 'This majestic 5-star resort sits at a stunning elevation of 2000 feet above the city, in a restored 1894 palace.'},

		{ id : 3, title: 'Fairmont', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg', 
		content: 'Sprawled across 50 acres of ravishing landscape, this 5-star resort offers panoramic views of Lake Pichola.'},

		{ id : 4, title: 'Four Seasons', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg', 
		content: 'Constructed between 1928 and 1943, this resort and spa is home to the erstwhile royal family and boasts'},

		{ id : 5, title: 'Jumeirah', uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg', 
		content: 'The Oberoi Mumbai is a striking example of modern architecture that lifts you over Marine Drive to enjoy magnificent views of the Arabian Sea'}
	];

	const renderItem: ListRenderItem<typeof card[0]> = (items) => (
		<View style={styles.cardContainer}>
    		<Card>
				<Card.Title>{items.item.title}</Card.Title>
				<Card.Image
					style={{ padding: 0 }}
					source={{
					uri:
						'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
					}}
				/>
				<Text style={{ marginBottom: 10 }}>
					{items.item.content}
				</Text>
				<Button
					// icon={
					// 	<Icon
					// 		name="code"
					// 		color="#AEA8FF"
					// 		iconStyle={{ marginRight: 10 }}
					// 	/>
					// }
					buttonStyle={{
					borderRadius: 0,
					marginLeft: 0,
					marginRight: 0,
					marginBottom: 0,
					backgroundColor: '#8E4DFF'
					}}
					title="Book Now"
				/>
			</Card>
  		</View>
	);

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
			
			<FlatList
				data={card}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2} // Set the number of columns to 2
			/>


		</SafeAreaView>
    );
}

export default Home;
