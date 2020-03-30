import { makeStyles } from "@material-ui/styles";
// Define object to share properties between css classes
const centeredStyleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
export default makeStyles({
  // Define here your component styles!
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObject
  },
  cardContainer: {
    width: "400px",
    height: "200px",
    padding: "2rem",
    flexDirection: "column",
    ...centeredStyleObject
  },
  title: {
    fontSize: "4rem"
  },
  titleGridContainer: {
    ...centeredStyleObject
  },
  textFieldSearch: {
    width: "90%"
  },
  searchButton: {
    marginLeft: ".5rem"
  },
  buttonsContainer: {
    marginTop: ".5rem"
  },
  movieIcon: {
    fontSize: "4rem"
  }
});
