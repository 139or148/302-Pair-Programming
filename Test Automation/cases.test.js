//Pass - all test cases are valid
//Fail - invalid test case(s) contained



//Test Cases: 

  //Case 1 - Both husband and wife have no income
  test('Both husband and wife have no income', () => {
    //Input Value
    Husband_Year_Income = 0;
    Wife_Year_Income    = 0;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 0 + 0;
    Husband_MPF                            = Math.min(0 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(0 * 0.05, 18000); 
    Total_MPF                              = 0 + 0
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(0 - 0 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(0 - 0 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(0 + 0 - 0 - 0 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(0 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(0 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 0 + 0;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(0 * 0.02);   
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(0)
    expect(Husband_MPF).toBe(0);                            
    expect(Wife_MPF).toBe(0);     
    expect(Total_MPF).toBe(0)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(0);          
    expect(Wife_Net_Chargeable_Income).toBe(0);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(0); 
    expect(Husband_Tax_Payable).toBe(0);                    
    expect(Wife_Tax_Payable).toBe(0);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(0);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(0);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});



  //Case 2 - Both husband and wife have extreme low income
  test('Both husband and wife have extreme low income', () => {
    //Input Value:
    Husband_Year_Income = 80000;
    Wife_Year_Income    = 70000;
    //Input Value Verification (all value must be 0 or a positive integer):
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 80000 + 70000
    Husband_MPF                            = Math.min(80000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(70000 * 0.05, 18000);
    Total_MPF                              = 4000 + 3500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(0 - 0 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(0 - 0 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(0 + 0 - 0 - 0 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(0 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(0 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 0 + 0;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(0 * 0.02);   
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value):
    expect(Total_Year_Income).toBe(150000)
    expect(Husband_MPF).toBe(4000);                            
    expect(Wife_MPF).toBe(3500);     
    expect(Total_MPF).toBe(7500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(0);          
    expect(Wife_Net_Chargeable_Income).toBe(0);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(0); 
    expect(Husband_Tax_Payable).toBe(0);                    
    expect(Wife_Tax_Payable).toBe(0);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(0);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(0);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});



  //Case 3 - Both husband and wife have extreme high income
  test('Both husband and wife have extreme high income', () => {
    //Input Value:
    Husband_Year_Income = 2500000;
    Wife_Year_Income    = 2400000;
    //Input Value Verification (all value must be 0 or a positive integer):
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 2500000 + 2400000
    Husband_MPF                            = Math.min(2500000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(2400000 * 0.05, 18000);
    Total_MPF                              = 18000 + 18000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(2500000 - 18000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(2400000 - 18000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(2500000 + 2400000 - 18000 - 18000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor((2500000 - 18000) * 0.15); //round down
    Wife_Tax_Payable                       = Math.floor((2400000 - 18000) * 0.15); 
    Total_Tax_Payable_Separate_Assessment  = 372300 + 357300;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor((2500000 + 2400000 - 18000 -18000) * 0.15);   
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value):
    expect(Total_Year_Income).toBe(4900000)
    expect(Husband_MPF).toBe(18000);                            
    expect(Wife_MPF).toBe(18000);     
    expect(Total_MPF).toBe(36000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(2350000);          
    expect(Wife_Net_Chargeable_Income).toBe(2250000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(4600000); 
    expect(Husband_Tax_Payable).toBe(372300);                    
    expect(Wife_Tax_Payable).toBe(357300);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(729600);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(729600);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});  



  //Case 4 - There is significant difference between husband and wife income
  test('There is significant difference between husband and wife income', () => {
    //Input Value
    Husband_Year_Income = 1800000;
    Wife_Year_Income    = 100000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 1800000 + 100000;
    Husband_MPF                            = Math.min(1800000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(100000 * 0.05, 18000); 
    Total_MPF                              = 18000 + 5000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(1800000 - 18000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(100000 - 5000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(1800000 + 100000 - 18000 - 5000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 1450000 * 0.17); //round down
    Wife_Tax_Payable                       = Math.floor(0 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 262500 + 0;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 1413000 * 0.17);  
    Joint_Assessement_Recommended          = "Y"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(1900000)
    expect(Husband_MPF).toBe(18000);                            
    expect(Wife_MPF).toBe(5000);     
    expect(Total_MPF).toBe(23000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(1650000);          
    expect(Wife_Net_Chargeable_Income).toBe(0);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(1613000); 
    expect(Husband_Tax_Payable).toBe(262500);                    
    expect(Wife_Tax_Payable).toBe(0);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(262500);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(256210);     
    expect(Joint_Assessement_Recommended).toBe("Y");          
});  



  //Case 5 - One has extreme low income, one has extreme high income
  test('One has extreme low income, one has extreme high income', () => {
    //Input Value
    Husband_Year_Income = 60000;
    Wife_Year_Income    = 2600000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 60000 + 2600000;
    Husband_MPF                            = Math.min(60000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(2600000 * 0.05, 18000); 
    Total_MPF                              = 3000 + 18000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(60000 - 3000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(2600000 - 18000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(60000 + 2600000 - 3000 - 18000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(0 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor((2600000 - 18000) * 0.15); 
    Total_Tax_Payable_Separate_Assessment  = 0 + 387300;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 2175000 * 0.17);  
    Joint_Assessement_Recommended          = "Y"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(2660000)
    expect(Husband_MPF).toBe(3000);                            
    expect(Wife_MPF).toBe(18000);     
    expect(Total_MPF).toBe(21000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(0);          
    expect(Wife_Net_Chargeable_Income).toBe(2450000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(2375000); 
    expect(Husband_Tax_Payable).toBe(0);                    
    expect(Wife_Tax_Payable).toBe(387300);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(387300);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(385750);     
    expect(Joint_Assessement_Recommended).toBe("Y");          
});   



  //Case 6 - One has no income, one has extreme low income
  test('One has no income, one has extreme low income', () => {
    //Input Value
    Husband_Year_Income = 0;
    Wife_Year_Income    = 50000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 0 + 50000;
    Husband_MPF                            = Math.min(0 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(50000 * 0.05, 18000); 
    Total_MPF                              = 0 + 2500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(0 - 0 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(50000 - 2500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(0 + 50000 - 0 - 2500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(0 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(0 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 0 + 0;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(0 * 0.02);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(50000)
    expect(Husband_MPF).toBe(0);                            
    expect(Wife_MPF).toBe(2500);     
    expect(Total_MPF).toBe(2500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(0);          
    expect(Wife_Net_Chargeable_Income).toBe(0);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(0); 
    expect(Husband_Tax_Payable).toBe(0);                    
    expect(Wife_Tax_Payable).toBe(0);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(0);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(0);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});  



  //Case 7 - One has no income, one has extreme high income
  test('One has no income, one has extreme high income', () => {
    //Input Value
    Husband_Year_Income = 0;
    Wife_Year_Income    = 2300000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 0 + 2300000;
    Husband_MPF                            = Math.min(0 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(2300000 * 0.05, 18000); 
    Total_MPF                              = 0 + 18000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(0 - 0 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(2300000 - 18000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(0 + 2300000 - 0 - 18000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(0 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor((2300000 - 18000) * 0.15); 
    Total_Tax_Payable_Separate_Assessment  = 0 + 342300;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 1818000 * 0.17);  
    Joint_Assessement_Recommended          = "Y"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(2300000)
    expect(Husband_MPF).toBe(0);                            
    expect(Wife_MPF).toBe(18000);     
    expect(Total_MPF).toBe(18000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(0);          
    expect(Wife_Net_Chargeable_Income).toBe(2150000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(2018000); 
    expect(Husband_Tax_Payable).toBe(0);                    
    expect(Wife_Tax_Payable).toBe(342300);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(342300);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(325060);     
    expect(Joint_Assessement_Recommended).toBe("Y");          
});      



  //Case 8 - Husband and wife net chargeable income are between 1 and 50000
  test('Husband and wife net chargeable income are between 1 and 50000', () => {
    //Input Value
    Husband_Year_Income = 180000;
    Wife_Year_Income    = 160000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 180000 + 160000;
    Husband_MPF                            = Math.min(180000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(160000 * 0.05, 18000); 
    Total_MPF                              = 9000 + 8000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(180000 - 9000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(160000 - 8000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(180000 + 160000 - 9000 - 8000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(39000 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(20000 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 780 + 400;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 9000 * 0.06);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(340000)
    expect(Husband_MPF).toBe(9000);                            
    expect(Wife_MPF).toBe(8000);     
    expect(Total_MPF).toBe(17000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(39000);          
    expect(Wife_Net_Chargeable_Income).toBe(20000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(59000); 
    expect(Husband_Tax_Payable).toBe(780);                    
    expect(Wife_Tax_Payable).toBe(400);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(1180);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(1540);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});      



  //Case 9 - Husband and wife net chargeable income are between 50001 and 100000
  test('Husband and wife net chargeable income are between 50001 and 100000', () => {
    //Input Value
    Husband_Year_Income = 230000;
    Wife_Year_Income    = 200000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 230000 + 200000;
    Husband_MPF                            = Math.min(230000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(200000 * 0.05, 18000); 
    Total_MPF                              = 11500 + 10000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(230000 - 11500 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(200000 - 10000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(230000 + 200000 - 11500 - 10000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 36500 * 0.06); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 8000 * 0.06); 
    Total_Tax_Payable_Separate_Assessment  = 3190 + 1480;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 44500 * 0.1 );  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(430000)
    expect(Husband_MPF).toBe(11500);                            
    expect(Wife_MPF).toBe(10000);     
    expect(Total_MPF).toBe(21500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(86500);          
    expect(Wife_Net_Chargeable_Income).toBe(58000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(144500); 
    expect(Husband_Tax_Payable).toBe(3190);                    
    expect(Wife_Tax_Payable).toBe(1480);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(4670);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(8450);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});     



  //Case 10 - Husband and wife net chargeable income are between 100001 and 150000
  test('Husband and wife net chargeable income are between 100001 and 150000', () => {
    //Input Value
    Husband_Year_Income = 270000;
    Wife_Year_Income    = 260000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 270000 + 260000;
    Husband_MPF                            = Math.min(270000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(260000 * 0.05, 18000); 
    Total_MPF                              = 13500 + 13000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(270000 - 13500 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(260000 - 13000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(270000 + 260000 - 13500 - 13000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 24500 * 0.1); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 50000 * 0.06 + 15000 * 0.1); 
    Total_Tax_Payable_Separate_Assessment  = 6450 + 5500;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 39500 * 0.17);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(530000)
    expect(Husband_MPF).toBe(13500);                            
    expect(Wife_MPF).toBe(13000);     
    expect(Total_MPF).toBe(26500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(124500);          
    expect(Wife_Net_Chargeable_Income).toBe(115000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(239500); 
    expect(Husband_Tax_Payable).toBe(6450);                    
    expect(Wife_Tax_Payable).toBe(5500);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(11950);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(22715);     
    expect(Joint_Assessement_Recommended).toBe("N");          
});   



  //Case 11 - Husband and wife net chargeable income are between 150001 and 200000
  test('Husband and wife net chargeable income are between 150001 and 200000', () => {
    //Input Value
    Husband_Year_Income = 330000;
    Wife_Year_Income    = 310000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 330000 + 310000;
    Husband_MPF                            = Math.min(330000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(310000 * 0.05, 18000); 
    Total_MPF                              = 16500 + 15500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(330000 - 16500 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(310000 - 15500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(330000 + 310000 - 16500 - 15500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 31500 * 0.14); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 12500 * 0.14); 
    Total_Tax_Payable_Separate_Assessment  = 13410 + 10750;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 144000 * 0.17);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(640000)
    expect(Husband_MPF).toBe(16500);                            
    expect(Wife_MPF).toBe(15500);     
    expect(Total_MPF).toBe(32000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(181500);          
    expect(Wife_Net_Chargeable_Income).toBe(162500);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(344000); 
    expect(Husband_Tax_Payable).toBe(13410);                    
    expect(Wife_Tax_Payable).toBe(10750);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(24160);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(40480);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});             



  //Case 12 - Husband and wife net chargeable income are more than 200000, but both of their tax calculation does not use standard rate
  test('Husband and wife net chargeable income are more than 200000, but both of their tax calculation does not use standard rate', () => {
    //Input Value
    Husband_Year_Income = 1200000;
    Wife_Year_Income    = 900000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 1200000 + 900000;
    Husband_MPF                            = Math.min(1200000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(900000 * 0.05, 18000); 
    Total_MPF                              = 18000 + 18000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(1200000 - 18000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(900000 - 18000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(1200000 + 900000 - 18000 - 18000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 850000 * 0.17); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 550000 * 0.17); 
    Total_Tax_Payable_Separate_Assessment  = 160500 + 109500;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 1600000 * 0.17);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(2100000)
    expect(Husband_MPF).toBe(18000);                            
    expect(Wife_MPF).toBe(18000);     
    expect(Total_MPF).toBe(36000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(1050000);          
    expect(Wife_Net_Chargeable_Income).toBe(750000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(1800000); 
    expect(Husband_Tax_Payable).toBe(160500);                    
    expect(Wife_Tax_Payable).toBe(109500);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(270000);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(288000);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});     



  //Case 13 - Net chargeable income (joint assessment) are between 1 and 50000 
  test('Net chargeable income (joint assessment) are between 1 and 50000', () => {
    //Input Value
    Husband_Year_Income = 160000;
    Wife_Year_Income    = 150000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 160000 + 150000;
    Husband_MPF                            = Math.min(160000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(150000 * 0.05, 18000); 
    Total_MPF                              = 8000 + 7500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(160000 - 8000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(150000 - 7500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(160000 + 150000 - 8000 - 7500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(20000 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(10500 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 400 + 210;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(30500 * 0.02);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(310000)
    expect(Husband_MPF).toBe(8000);                            
    expect(Wife_MPF).toBe(7500);     
    expect(Total_MPF).toBe(15500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(20000);          
    expect(Wife_Net_Chargeable_Income).toBe(10500);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(30500); 
    expect(Husband_Tax_Payable).toBe(400);                    
    expect(Wife_Tax_Payable).toBe(210);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(610);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(610);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});   



  //Case 14 - Net chargeable income (joint assessment) are between 50001 and 100000 
  test('Net chargeable income (joint assessment) are between 50001 and 100000', () => {
    //Input Value
    Husband_Year_Income = 190000;
    Wife_Year_Income    = 170000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 190000 + 170000;
    Husband_MPF                            = Math.min(190000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(170000 * 0.05, 18000); 
    Total_MPF                              = 9500 + 8500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(190000 - 9500 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(170000 - 8500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(190000 + 170000 - 9500 - 8500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(48500 * 0.02); //round down
    Wife_Tax_Payable                       = Math.floor(29500 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 970 + 590;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 28000 * 0.06);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(360000)
    expect(Husband_MPF).toBe(9500);                            
    expect(Wife_MPF).toBe(8500);     
    expect(Total_MPF).toBe(18000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(48500);          
    expect(Wife_Net_Chargeable_Income).toBe(29500);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(78000); 
    expect(Husband_Tax_Payable).toBe(970);                    
    expect(Wife_Tax_Payable).toBe(590);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(1560);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(2680);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});   



  //Case 15 - Net chargeable income (joint assessment) are between 100001 and 150000 
  test('Net chargeable income (joint assessment) are between 100001 and 150000', () => {
    //Input Value
    Husband_Year_Income = 220000;
    Wife_Year_Income    = 190000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 220000 + 190000;
    Husband_MPF                            = Math.min(220000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(190000 * 0.05, 18000); 
    Total_MPF                              = 11000 + 9500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(220000 - 11000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(190000 - 9500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(220000 + 190000 - 11000 - 9500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 27000 * 0.06); //round down
    Wife_Tax_Payable                       = Math.floor(48500 * 0.02); 
    Total_Tax_Payable_Separate_Assessment  = 2620 + 970;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 25500 * 0.1);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(410000)
    expect(Husband_MPF).toBe(11000);                            
    expect(Wife_MPF).toBe(9500);     
    expect(Total_MPF).toBe(20500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(77000);          
    expect(Wife_Net_Chargeable_Income).toBe(48500);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(125500); 
    expect(Husband_Tax_Payable).toBe(2620);                    
    expect(Wife_Tax_Payable).toBe(970);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(3590);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(6550);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});     



  //Case 16 - Net chargeable income (joint assessment) are between 150001 and 200000 
  test('Net chargeable income (joint assessment) are between 150001 and 200000', () => {
    //Input Value
    Husband_Year_Income = 220000;
    Wife_Year_Income    = 190000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 250000 + 200000;
    Husband_MPF                            = Math.min(250000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(200000 * 0.05, 18000); 
    Total_MPF                              = 12500 + 10000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(250000 - 12500 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(200000 - 10000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(250000 + 200000 - 12500 - 10000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 5500 * 0.1); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 8000 * 0.06); 
    Total_Tax_Payable_Separate_Assessment  = 4550 + 1480;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 13500 * 0.14);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(450000)
    expect(Husband_MPF).toBe(12500);                            
    expect(Wife_MPF).toBe(10000);     
    expect(Total_MPF).toBe(22500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(105500);          
    expect(Wife_Net_Chargeable_Income).toBe(58000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(163500); 
    expect(Husband_Tax_Payable).toBe(4550);                    
    expect(Wife_Tax_Payable).toBe(1480);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(6030);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(10890);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});  



  //Case 17 - Net chargeable income (joint assessment) are more than 200000, but its tax calculation does not use standard rate
  test('Net chargeable income (joint assessment) are more than 200000, but its tax calculation does not use standard rate', () => {
    //Input Value
    Husband_Year_Income = 360000;
    Wife_Year_Income    = 330000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 360000 + 330000;
    Husband_MPF                            = Math.min(360000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(330000 * 0.05, 18000); 
    Total_MPF                              = 18000 + 16500
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(360000 - 18000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(330000 - 16500 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(360000 + 330000 - 18000 - 16500 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 10000 * 0.17); //round down
    Wife_Tax_Payable                       = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 31500 * 0.14); 
    Total_Tax_Payable_Separate_Assessment  = 17700 + 13410;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor(50000 * 0.02 + 50000 * 0.06 + 50000 * 0.1 + 50000 * 0.14 + 191500 * 0.17);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(690000)
    expect(Husband_MPF).toBe(18000);                            
    expect(Wife_MPF).toBe(16500);     
    expect(Total_MPF).toBe(34500)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(210000);          
    expect(Wife_Net_Chargeable_Income).toBe(181500);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(391500); 
    expect(Husband_Tax_Payable).toBe(17700);                    
    expect(Wife_Tax_Payable).toBe(13410);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(31110);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(48555);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});    



  //Case 18 - Joint assessment tax is calculate by standard rate
  test('Joint assessment tax is calculate by standard rate', () => {
    //Input Value
    Husband_Year_Income = 2400000;
    Wife_Year_Income    = 3000000;
    //Input Value Verification (all value must be 0 or a positive integer)
    expect(Husband_Year_Income).toBeGreaterThanOrEqual(0); //check if it is 0 or positive
    expect(Wife_Year_Income).toBeGreaterThanOrEqual(0);
    expect(Husband_Year_Income).toBe(Math.floor(Husband_Year_Income)); //check if it is integer
    expect(Wife_Year_Income).toBe(Math.floor(Wife_Year_Income));

    //Output Value
    Total_Year_Income                      = 2400000 + 3000000;
    Husband_MPF                            = Math.min(2400000 * 0.05, 18000); //capped at 18000
    Wife_MPF                               = Math.min(3000000 * 0.05, 18000); 
    Total_MPF                              = 18000 + 18000
    Husband_Basic_Allowance                = 132000;
    Wife_Basic_Allowance                   = 132000;
    Basic_Allowance_Joint_Assessment       = 264000;
    Husband_Net_Chargeable_Income          = Math.max(2400000 - 18000 - 132000, 0); //minimum is 0
    Wife_Net_Chargeable_Income             = Math.max(3000000 - 18000 - 132000, 0); 
    Net_Chargeable_Income_Joint_Assessment = Math.max(2400000 + 3000000 - 18000 - 18000 - 264000, 0); 
    Husband_Tax_Payable                    = Math.floor((2400000 - 18000) * 0.15); //round down
    Wife_Tax_Payable                       = Math.floor((3000000 - 18000) * 0.15); 
    Total_Tax_Payable_Separate_Assessment  = 357300 + 447300;   
    Total_Tax_Payable_Joint_Assessment     = Math.floor((5400000 - 36000) * 0.15);  
    Joint_Assessement_Recommended          = "N"; 
    //Output Value Verification (all actual value has to exactly match expected value)
    expect(Total_Year_Income).toBe(5400000)
    expect(Husband_MPF).toBe(18000);                            
    expect(Wife_MPF).toBe(18000);     
    expect(Total_MPF).toBe(36000)                         
    expect(Husband_Basic_Allowance).toBe(132000);                
    expect(Wife_Basic_Allowance).toBe(132000);                   
    expect(Basic_Allowance_Joint_Assessment).toBe(264000);       
    expect(Husband_Net_Chargeable_Income).toBe(2250000);          
    expect(Wife_Net_Chargeable_Income).toBe(2850000);             
    expect(Net_Chargeable_Income_Joint_Assessment).toBe(5100000); 
    expect(Husband_Tax_Payable).toBe(357300);                    
    expect(Wife_Tax_Payable).toBe(447300);                       
    expect(Total_Tax_Payable_Separate_Assessment).toBe(804600);  
    expect(Total_Tax_Payable_Joint_Assessment).toBe(804600);     
    expect(Joint_Assessement_Recommended).toBe("N"); 
});       