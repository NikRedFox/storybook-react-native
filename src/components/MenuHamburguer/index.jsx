import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

export default function MenuHamburguer() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <View>
            <TouchableOpacity
                style={styles.hamburger}
                onPress={() => {
                    setMenuOpen(true);
                }}
                
            >
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
                
            </TouchableOpacity>

            <Modal 
                transparent visible={menuOpen} 
                animationType="fade"
                onRequestClose={() => setMenuOpen(false)}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.overlay}
                        activeOpacity={1}
                        onPress={() => setMenuOpen(false)}
                    />
                    <View style={styles.sideMenu}>
                        <Text style={styles.menuItem}>Home</Text>
                        <Text style={styles.menuItem}>Quem somos</Text>
                        <Text style={styles.menuItem}>Produtos</Text>
                        <Text style={styles.menuItem}>Contato</Text>
                        <Text style={styles.menuItem}>Componente teste</Text>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
  hamburger: {
    position: "absolute",
    top: -350,
    left: 100,
    zIndex: 10,
    backgroundColor: "#ff0000",
    borderRadius: 40,
    padding: 10,
  },

  line: {
    width: 30,
    height: 4,
    backgroundColor: "#000",
    marginVertical: 3,
    borderRadius: 2,
  },

  modalContainer: {
    flex: 1,
    flexDirection: "row",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  sideMenu: {
    width: 250,
    backgroundColor: "#000000",
    padding: 30,
    paddingTop: 80,
  },

  menuItem: {
    fontSize: 18,
    marginVertical: 15,
    color: "#fff",
  },
});