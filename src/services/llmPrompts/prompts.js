const getPrompt = (data) => {

  const content = () => {
    let subContent = '';
    if (Array.isArray(data) && data) {
      data.forEach(element => {
        const formType = getFormType(JSON.stringify(element));
        subContent += `<${formType}>\n${element}\n</${formType}>\n`;
        // subContent += element;
      });
    }
    return `<Content>\n${subContent}\n</Content>`;
  }

  return {
    prompt: `The following newline delimited text inside <Content></Content> XML tags contains data from an Acord form. Which is an insurance document for business.
    XML tag <Content></Content> denotes the start and end of the content.
    XML tag <Content></Content> will have sub XML tags like <Acord 25></Acord 25> where 25 is the form number or <Acord 28></Acord 28> where 28 is the form number <Acord 75></Acord 75> where 75 is the form number.
    Text under each of these sub XML tags will have some unique data which may not be available in the other sub XML tags.
    Check the entire text inside <Content></Content> tag along with its sub tags and find against below mentioned attributes -. 
    Additionally, look for XML Tag <Section name="Some Section Name"></Section> where section tag denotes start and end if an section and the name attribute holds the name of the same section. All queries between this tag refers to the same section.
    Loan Number:
    Policy Number:
    Borrowing Entity:
    Original Balance:
    Effective Date:
    Expiration Date:
    Property Name:
    Property Address:
    Insurable Value:
    Effective Gross Income:
    Improvements:
    Zoning:
    Conforming:
    <section name="Insurance Agent Information">
    Name:
    Phone:
    Fax:
    Email:
    </section>
    <section name="Insurance Information">
    Named Insured Correct? as Yes/No:
    Property Address correct? as Yes/No
    Is Mortgagee Listed: as Yes/No:
    Is the Mortgagee correct? as Yes/No:
    Carrier: as Array of Array
    A.M. Best Rating correct? Yes/No:
    Policy Term:
    Amount of Coverage:
    Acceptable Replacement Cost?:
    Any Coinsurance? as Yes/No:
    Deductible:
    Agreed Value Endorsement?
    Blanket Policy? as Yes/No:
    Full Policy? as Yes/No:
    </section>
    <section name="Business Imcome and Loss of Rent Insurance">
    Amount of Coverage:
    Deductible:
    Loss Payee Only:
    Is the Loss Payee correct? as Yes/No:
    </section>
    <section name="Ordinance And Law Coverage">
    Required? as Yes/No:
    Amount of Coverage A:
    Amount of Coverage B:
    Amount of Coverage C:
    </section>
    <section name="Boiler And Machinery Coverage">
    Required? as Yes/No:
    Amount of Coverage:
    Deductible:
    </section>
    <section name="Regional Perils Coverage">
    Required? as Yes/No
    Amount of Coverage:
    Deductible:
    </section>
    <section name="Commercial General Liability Coverage">
    Items covered: 
    Is the Additional Insured correct? as Yes/No:
    Carrier:
    A.M. Best Rating correct? as Yes/No:
    Policy Term:
    Evidence Provided:
    Per Occurrence Coverage:
    General Aggregate Coverage:
    Deductible:
    Blanket Policy? as Yes/No:
    Full Policy? as Yes/No:
    </section>
    <section name="Umbrella/Excess Liability Coverage">
    Carrier:
    Follows Form?  Yes/No:
    A.M. Best Rating correct?
    Policy Term:
    Evidence Provided:
    Deductible:
    Blanket Policy? as Yes/No:
    Full Policy? as Yes/No:
    </section>
    <section name="Commercial Auto Liability Insurance">
    Required? as Yes/No:
    Coverage Acceptable? as Yes/No:
    Does Property use vehicles business purposes?
    </section>
    Amount of Directors and Officers Liability coverage (Coverage Acceptable?): If amount is greater than or equal to 1 Million then Yes else No:
    <section name="Workers Compensation">
    Required? as Yes/No:
    Amount of Coverage (Coverage Acceptable)? If amount of is greater than or equal to 1 Million then Yes else No:
    Does Borrower directly employ any staff? as Yes/No:
    </section>
    <section name="Earthquake Insurance">
    Required? as Yes/No:
    Coverage Acceptable?
    </section>
    <section name="Terrorism Insurance">
    Required? as Yes/No:
    Coverage Acceptable?
    </section>
    Special Flood Hazard Determination Date:
    <section name="Flood Insurance">
    Flood Zone: as Zone A, Zone B etc.
    Required? If Flood Zone is under Zone A to V then Yes else No:
    Carrier:
    Policy No.:
    Mortgagee Listed:
    Is Mortgagee correct? as Yes/No:
    Policy Term:
    Deductible:
    Loss of Rents:
    Annual Premium Paid in Full? as Yes/No:
    Amount of coverage:
    Count of Buildings: Return as Array of Array
    Total Amount covered forBuildings: Return as Array of Array
    </section>
    <section name="Building Limits">
    Building Number:
    Building Name:
    Amount:
    </section>
    Notes or Remarks:
    ${content(data)}
    Return the response in json format
    `
  }
}

const getFormType = (data) => {
  const regex = /\\nACORD\s(\d\d)/g;
  const matches = data.match(regex);
  const formType = matches.map(match => match.replace(/\\nACORD\s/g, 'Acord '))[0];
  return formType;
}

export default getPrompt;