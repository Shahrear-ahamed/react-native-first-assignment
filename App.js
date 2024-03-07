import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#61dafb" />
      <View style={styles.profile}>
        <Image
          source={require("./assets/images/Oval.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>The Octocat</Text>
          <Text style={styles.profileUsername}>@octocat</Text>
          <Text style={styles.profileJoined}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, nam
        molestias animi natus eum sit architecto error veritatis unde qui?
      </Text>
      <View style={styles.data}>
        <View style={styles.dataItem}>
          <Text style={styles.fontColor}>Repos</Text>
          <Text style={styles.rawData}>2</Text>
        </View>
        <View style={styles.dataItem}>
          <Text style={styles.fontColor}>Followers</Text>
          <Text style={styles.rawData}>3938</Text>
        </View>
        <View style={styles.dataItem}>
          <Text style={styles.fontColor}>Following</Text>
          <Text style={styles.rawData}>9</Text>
        </View>
      </View>
      <View style={styles.linkParent}>
        <View style={styles.linkRaw}>
          <Image
            source={require("./assets/images/003-pin.png")}
            height={20}
            width={20}
            style={{ marginRight: 25 }}
          />
          <Text style={styles.fontColor}>San Francisco</Text>
        </View>
        <View style={styles.linkRaw}>
          <Image
            source={require("./assets/images/002-url.png")}
            height={20}
            width={20}
            style={styles.linkIcons}
          />
          <Text style={styles.fontColor}>https://github.blog</Text>
        </View>
        <View style={styles.linkRaw}>
          <Image
            source={require("./assets/images/004-twitter.png")}
            height={20}
            width={20}
            style={styles.linkIcons}
            tintColor={"#8898AF"}
          />
          <Text style={styles.noLink}>Not Available</Text>
        </View>
        <View style={styles.linkRaw}>
          <Image
            source={require("./assets/images/001-office.png")}
            height={20}
            width={20}
            style={styles.linkIcons}
          />
          <Text style={styles.fontColor}>@github</Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  fontColor: { color: "#5F7AA6" },
  container: {
    marginTop: 20,
    padding: 20,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: { width: 80, height: 80, marginRight: 20 },
  profileName: { fontSize: 18, fontWeight: "bold" },
  profileUsername: { fontSize: 14, color: "skyblue" },
  profileJoined: { fontSize: 16, color: "#8898AF", marginTop: 5 },
  bio: { fontSize: 16, color: "#8898AF", marginTop: 10, marginBottom: 10 },
  data: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#F6F8FF",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  dataItem: {
    display: "flex",
    alignItems: "center",
  },
  rawData: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  linkParent: {
    display: "flex",
    marginBottom: 20,
    flexDirection: "column",
  },
  linkRaw: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
  linkIcons: {
    marginRight: 20,
  },
  noLink: {
    color: "#8898AF",
  },
});
