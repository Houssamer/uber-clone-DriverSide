import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useSpring, animated } from 'react-spring';

const AnimatedView = animated(View);

const SignInScreen = () => {
    const [signUp, setSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const props = useSpring({
        opacity: !signUp ? 1 : 0,
        config: {duration: 1000}
    })
    const props1 = useSpring({
        opacity: signUp ? 1 : 0,
        config: {duration: 1000}
    })
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.welcomeText}>Welcome,</Text>
            </View>
            {
                !signUp ? (
                    <AnimatedView style={{...styles.bottom, ...props}}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputText}>Email: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.inputText}>Password: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.firstText}>You don't have an account yet?</Text>
                            <Text style={styles.secondText} onPress={() => setSignUp(true)}>SignUp</Text>
                        </View>
                    </AnimatedView>
                ) : (
                    <AnimatedView style={{...styles.bottom, ...props1}}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputText}>Num: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Num"
                                keyboardType="numeric"
                            />
                            <Text style={styles.inputText}>Email: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Email"
                            />
                            <Text style={styles.inputText}>Password: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.firstText}>You already have an account?</Text>
                            <Text style={styles.secondText} onPress={() => setSignUp(false)}>SignIn</Text>
                        </View>
                    </AnimatedView>
                )
            }
        </View>
    )
}

export default SignInScreen;
