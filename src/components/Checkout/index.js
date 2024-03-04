  import React from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { View, Text, Pressable, Image, ScrollView } from "react-native";
  import { useSelector, useDispatch } from "react-redux";
  import { useNavigation } from "@react-navigation/native";
  import { clearCart } from "../../redux/slice/Product";

  const Checkout = () => {
    const navigation = useNavigation();

    const handleGoToCheckout = () => {
      navigation.goBack();
    };

    const checkout = useSelector((state) => state.Product.Data);
    const subtotal = checkout
      .filter((item) => item && typeof item.price === "number")
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const ItemAdd = checkout.length;

    return (
      <View
        style={{
          padding: 10,
          height: "100%",
          flex: 1,
          justifyContent: "",
          position: "relative",
        }}
      >
        <AntDesign
          name="close"
          size={30}
          color="blue"
          onPress={handleGoToCheckout}
        />
        <View
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginVertical: 8,
            color: "white",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Cart</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              padding: 6,
              backgroundColor: "pink",
            }}
          >
            <AntDesign name="delete" size={18} color="red" />
          </View>
        </View>
        <View style={{ marginTop: 10 ,marginBottom:10,height:320,overflow:"scroll" ,paddingTop:10}}>
          {checkout.map((e, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 20, position: "relative" }}>
                <Image
                  source={{
                    uri: e.image,
                  }}
                  style={{ width: 70, height: 70, borderRadius: 10 }}
                />
                <View>
                  <Text style={{ width: 25, height: 25, position: "absolute", right: 12, bottom: 17, backgroundColor: "black", color: "white", padding: 3, borderRadius: 40, textAlign: "center" }}>{e.quantity}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16 }}>{e.name}</Text>
                  <Text style={{ fontSize: 16 }}>Tax-exempt</Text>
                </View>
              </View>
              <View style={{ fontSize: 16 }}>
                <Text style={{ fontSize: 10 }}>₹ {e.price} x {e.quantity}</Text>
                <Text>₹ {e.price * e.quantity}</Text>
              </View>
            </View>
          ))}
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
        </View>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Subtotal</Text>
            <Text style={{ fontSize: 16 }}>₹ {subtotal}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "gred",
              borderBottomWidth: 1,
              marginVertical: 10,
              alignItems: "center",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              // backgroundColor:"red",
              marginBottom: 100,

            }}
          >
            <Text style={{ fontSize: 16, marginTop: 5 }}>Taxes</Text>
            <Text style={{ fontSize: 16 }}>₹ 0.00</Text>
          </View>
          
        <View
          style={{
            marginTop: 100,
            position: "absolute",
            bottom: 10,
            width: "95%",
            gap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>Total</Text>
              <Text style={{ fontSize: 16 }}>{ItemAdd} Item</Text>
            </View>
            <View>
              <Text style={{ marginLeft: 5, fontSize: 16 }}>₹ {subtotal}</Text>
            </View>
          </View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: "blue",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Checkout
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  export default Checkout;