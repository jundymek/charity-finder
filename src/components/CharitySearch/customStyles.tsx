
export const customStyles = {
  container: (styles: any, { data }: any) => {
    return {
      ...styles,
      padding: "0px 20px"
    };
  },
  control: (styles: any, { data }: any) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      borderRadius: "2px",
      marginTop: "20px"
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      border: "1px solid white"
    };
  },
  option: (styles: any, { data }: any) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      ":hover": {
        color: "black",
        backgroundColor: "white"
      }
    };
  },
  multiValue: (styles: any, { data }: any) => {
    return {
      ...styles,
      backgroundColor: "black",
      color: "white",
      border: "1px solid white"
    };
  },
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  }),
  singleValue: (styles: any, { data }: any) => ({
    ...styles,
    color: "white",
    ":hover": {
      color: "white"
    }
  }),
  placeholder: (styles: any, { data }: any) => ({
    ...styles,
    color: "white",
    ":hover": {
      color: "white"
    }
  })
};
