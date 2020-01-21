/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ca.sheridancollege.week3.softwarefundamentals.ice1;

import java.util.Scanner;


/**
 * A class that fills a magic hand of 7 cards with random Card Objects
 * and then asks the user to pick a card and searches the array of cards
 * for the match to the user's card. To be used as starting code in ICE 1
 * @author 
 */
public class CardTrick {
    
    public static void main(String[] args)
    {
        Card[] magicHand = new Card[7];
        
        for (int i=0; i<magicHand.length; i++)
        {
            Card c = new Card();
            c.setValue((int)(Math.random()*13 + 1));
            c.setSuit(Card.SUITS[(int)(Math.random()*4)]);
            magicHand[i] = c;
        }
        
        Card c = new Card();
        Scanner scanner = new Scanner(System.in);
        int value = 0;
        String suit;
        do{
            System.out.print("Input a card value :");
            value = scanner.nextInt();
            if (value<1 || value >13 )
                System.out.println("Invalid value. Please enter again.");
        }while (value<1 || value >13 );
        scanner.nextLine(); // Flush out the scanner buffer
        while (true){
            System.out.print("Input a card suit :");
            suit = scanner.nextLine();
            if (suit.equals("Spades") || suit.equals("Diamonds") || suit.equals("Hearts") || suit.equals("Clubs"))
                break;
            else
                System.out.println("Invalid suit. Please enter again.");
        }
        c.setValue(value);
        c.setSuit(suit);
        
        
        boolean flag = false;
        for (int x=0; x<magicHand.length; x++)
        {
            if ((c.getSuit().equals(magicHand[x].getSuit())) && (c.getValue() == magicHand[x].getValue()))
                flag = true;
        }
        
        if (flag)
            System.out.println("Card was in the magic hand");
        else
            System.out.println("Card was not in the magic hand");
    }
    
}