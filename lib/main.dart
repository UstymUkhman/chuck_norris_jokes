import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

import 'dart:convert';
import 'dart:async';

void main() {
  runApp(new MaterialApp(home: new MyGetHttpData()));
}

class MyGetHttpData extends StatefulWidget {
  @override
  MyGetHttpDataState createState() => new MyGetHttpDataState();
}

class MyGetHttpDataState extends State<MyGetHttpData> {
  String joke = '';

  Future<void> getNewJoke() async {
    var response = await http.get(
      Uri.encodeFull("https://api.chucknorris.io/jokes/random"),
      headers: {"Accept": "application/json"}
    );

    setState(() {
      var dataConvertedToJSON = json.decode(response.body);
      joke = dataConvertedToJSON['value'];
      print('Current Joke: ' + joke);
    });
  }

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Chuck Norris Jokes")
      ),

      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,          
          children: <Widget>[
            SizedBox(
              width: mq.size.width / 10 * 8,
              child: Text(
                '$joke',
                style: new TextStyle(
                  color: Colors.black,
                  fontSize: 20.0
                )
              )
            )
          ]
        )
      ),

      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: getNewJoke,
        tooltip: 'New Joke'
      )
    );
  }

  @override
  void initState() {
    super.initState();
    this.getNewJoke();
  }
}
