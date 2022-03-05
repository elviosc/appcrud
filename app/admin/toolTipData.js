var FiltersEnabled = 0; // if your not going to use transitions or filters in any of the tips set this to 0
var spacer="&nbsp; &nbsp; &nbsp; ";

// email notifications to admin
notifyAdminNewMembers0Tip=["", spacer+"No email notifications to admin."];
notifyAdminNewMembers1Tip=["", spacer+"Notify admin only when a new member is waiting for approval."];
notifyAdminNewMembers2Tip=["", spacer+"Notify admin for all new sign-ups."];

// visitorSignup
visitorSignup0Tip=["", spacer+"If this option is selected, visitors will not be able to join this group unless the admin manually moves them to this group from the admin area."];
visitorSignup1Tip=["", spacer+"If this option is selected, visitors can join this group but will not be able to sign in unless the admin approves them from the admin area."];
visitorSignup2Tip=["", spacer+"If this option is selected, visitors can join this group and will be able to sign in instantly with no need for admin approval."];

// Posts table
Posts_addTip=["",spacer+"This option allows all members of the group to add records to the 'Posts' table. A member who adds a record to the table becomes the 'owner' of that record."];

Posts_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Posts' table."];
Posts_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Posts' table."];
Posts_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Posts' table."];
Posts_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Posts' table."];

Posts_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Posts' table."];
Posts_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Posts' table."];
Posts_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Posts' table."];
Posts_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Posts' table, regardless of their owner."];

Posts_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Posts' table."];
Posts_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Posts' table."];
Posts_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Posts' table."];
Posts_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Posts' table."];

// Categoria table
Categoria_addTip=["",spacer+"This option allows all members of the group to add records to the 'Categoria' table. A member who adds a record to the table becomes the 'owner' of that record."];

Categoria_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Categoria' table."];
Categoria_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Categoria' table."];
Categoria_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Categoria' table."];
Categoria_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Categoria' table."];

Categoria_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Categoria' table."];
Categoria_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Categoria' table."];
Categoria_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Categoria' table."];
Categoria_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Categoria' table, regardless of their owner."];

Categoria_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Categoria' table."];
Categoria_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Categoria' table."];
Categoria_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Categoria' table."];
Categoria_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Categoria' table."];

// Tags table
Tags_addTip=["",spacer+"This option allows all members of the group to add records to the 'Tags' table. A member who adds a record to the table becomes the 'owner' of that record."];

Tags_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Tags' table."];
Tags_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Tags' table."];
Tags_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Tags' table."];
Tags_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Tags' table."];

Tags_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Tags' table."];
Tags_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Tags' table."];
Tags_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Tags' table."];
Tags_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Tags' table, regardless of their owner."];

Tags_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Tags' table."];
Tags_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Tags' table."];
Tags_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Tags' table."];
Tags_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Tags' table."];

// Midia table
Midia_addTip=["",spacer+"This option allows all members of the group to add records to the 'Midia' table. A member who adds a record to the table becomes the 'owner' of that record."];

Midia_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Midia' table."];
Midia_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Midia' table."];
Midia_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Midia' table."];
Midia_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Midia' table."];

Midia_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Midia' table."];
Midia_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Midia' table."];
Midia_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Midia' table."];
Midia_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Midia' table, regardless of their owner."];

Midia_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Midia' table."];
Midia_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Midia' table."];
Midia_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Midia' table."];
Midia_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Midia' table."];

/*
	Style syntax:
	-------------
	[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,
	TextTextAlign,TitleFontFace,TextFontFace, TipPosition, StickyStyle, TitleFontSize,
	TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY,
	TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]

*/

toolTipStyle=["white","#00008B","#000099","#E6E6FA","","images/helpBg.gif","","","","\"Trebuchet MS\", sans-serif","","","","3",400,"",1,2,10,10,51,1,0,"",""];

applyCssFilter();
