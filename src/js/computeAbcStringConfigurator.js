const lookupTable = {
  "C": "G,_A,A,_B,B,C_DD_EEF^FG_AA_BBc_dd_eef^fg_aa_bbc'",
  "Db": "G,A,=A,B,=B,CD=DE=EFG=GA=AB=Bcd=de=efg=ga=ab=bc'",
  "D": "G,_A,A,_B,B,=CCD_EE=FFG_AA_BB=ccd_ee=ffg_aa_bb=c'c'",
  "Eb": "G,A,=A,B,=B,C_DDE=EF_GGA=AB=Bc_dde=ef_gga=ab=bc'",
  "E": "G,A,^A,B,=CC=DDE=FF=GGA^AB=cc=dde=ff=gga^ab=c'c'",
  "F": "G,_A,A,B,=B,C_DD_EEF_GG_AAB=Bc_dd_eef_gg_aab=bc'",
  "F#": "G,=A,A,B,=CC=DD=EEF=F=GG=AAB=cc=dd=eef=f=gg=aab=c'c'",
  "G": "G,_A,A,_B,B,C^CD_EE=FFG_AA_BBc^cd_ee=ffg_aa_bbc'^c'",
  "Ab": "G,A,_B,B,=B,CD=D=EEF_GGA_BB=Bcd=d=eef_gga_bb=bc'",
  "A": "G,A,_B,B,=CCD^DE=FF=GGA_BB=ccd^de=ff=gga_bb=c'c'",
  "Bb": "G,_A,A,B,_CC_DDE=EF_GG_AAB_cc_dde=ef_gg_aab_c'c'",
  "B": "G,=A,A,B,=CC=DDE^EF=GG=AAB=cc=dde^ef=gg=aab=c'c'"
};

export function computeAbcStringConfigurator(
    chromatic,
    key,
  ) {
    if (!chromatic) {
      return `X:1\nL:1/1\nM:\nK:${key}\nV:V:V1 clef=treble\nG,A,B,CDEFGABcdefgabc'`;
    } else {
      return `X:1\nL:1/1\nM:\nK:${key}\nV:V:V1 clef=treble\n${lookupTable[key]}`;
    }
  }