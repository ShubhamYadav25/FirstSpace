import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#D7CCFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title : {
        fontWeight: "bold",
        fontSize:50,
        color:"#8E4DFF",
        marginBottom: 40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#AEA8FF",
        borderRadius:25,
        height:60,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        fontWeight: "bold",
        color:"black"
    },

    forgot : {
        color:"black",
        fontWeight: "bold",
        fontSize:14
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#8E4DFF",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
    },
    header: {
        backgroundColor: '#8E4DFF',
        width:"100%",
        height: "7%"
    },
    SateHeadline: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 20, // Adjust as needed for font size
        textAlign: 'left',
    },
    CityHeadLine: {
        fontWeight: 'bold',
        fontSize: 20, // Adjust as needed for font size
        textAlign: 'left',
        marginTop: 5,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    Avatarcontainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    AvatarPlaceHolder: {
        marginLeft: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardMenuList: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
    CardMenuListText: {
        marginLeft: 20,
        marginTop: 3,
    },
    CardMenuIcon: {
        marginLeft: 200,
    },
    ErrorText: {
        color: 'red',
    },
    titleSignUp : {
        fontWeight: "bold",
        fontSize:30,
        color:"#8E4DFF",
        marginBottom: 40,
    },
    titleSignUpDescription : {
        fontSize:20,
        color:"#8E4DFF",
        marginTop: -48,
    },
    SigninBtn:{
        width:"80%",
        backgroundColor:"#8E4DFF",
        borderRadius:25,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        // marginTop:5,
        // marginBottom:,
        paddingTop:30,
    },
    
})