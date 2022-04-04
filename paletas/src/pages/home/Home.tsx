import React from 'react';
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer/footer";
import { Card } from "../../components/structure/card/card";
import { HomeDiv } from "./style" 
 
// desing pattern: Factory

export function Home() {
  return (
    <>
      <Header/>
      <HomeDiv>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </HomeDiv>
      <Footer/>
    </>
  );
}


