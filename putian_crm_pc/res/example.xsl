<?xml version="1.0"  encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">      
      <ideaitems>
          <xsl:apply-templates select="ideaitems/ideaitem"/> 
      </ideaitems>        
  </xsl:template>
    <xsl:template match="ideaitems/ideaitem">
        <ideaitem>
          <xsl:for-each select="item">	
              <xsl:element name="item">
                  <xsl:attribute name="name">
                    <xsl:value-of select="@name" /> 
                  </xsl:attribute>
                  <xsl:value-of select="text()"/>
              </xsl:element>  
          </xsl:for-each>  
          </ideaitem>
    </xsl:template>
</xsl:stylesheet>