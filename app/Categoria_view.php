<?php
// This script and data application were generated by AppGini 22.11
// Download AppGini for free from https://bigprof.com/appgini/download/

	include_once(__DIR__ . '/lib.php');
	@include_once(__DIR__ . '/hooks/Categoria.php');
	include_once(__DIR__ . '/Categoria_dml.php');

	// mm: can the current member access this page?
	$perm = getTablePermissions('Categoria');
	if(!$perm['access']) {
		echo error_message($Translation['tableAccessDenied']);
		exit;
	}

	$x = new DataList;
	$x->TableName = 'Categoria';

	// Fields that can be displayed in the table view
	$x->QueryFieldsTV = [
		"`Categoria`.`id`" => "id",
		"`Categoria`.`Categoria`" => "Categoria",
	];
	// mapping incoming sort by requests to actual query fields
	$x->SortFields = [
		1 => '`Categoria`.`id`',
		2 => 2,
	];

	// Fields that can be displayed in the csv file
	$x->QueryFieldsCSV = [
		"`Categoria`.`id`" => "id",
		"`Categoria`.`Categoria`" => "Categoria",
	];
	// Fields that can be filtered
	$x->QueryFieldsFilters = [
		"`Categoria`.`id`" => "ID",
		"`Categoria`.`Categoria`" => "Categoria",
	];

	// Fields that can be quick searched
	$x->QueryFieldsQS = [
		"`Categoria`.`id`" => "id",
		"`Categoria`.`Categoria`" => "Categoria",
	];

	// Lookup fields that can be used as filterers
	$x->filterers = [];

	$x->QueryFrom = "`Categoria` ";
	$x->QueryWhere = '';
	$x->QueryOrder = '';

	$x->AllowSelection = 1;
	$x->HideTableView = ($perm['view'] == 0 ? 1 : 0);
	$x->AllowDelete = $perm['delete'];
	$x->AllowMassDelete = true;
	$x->AllowInsert = $perm['insert'];
	$x->AllowUpdate = $perm['edit'];
	$x->SeparateDV = 1;
	$x->AllowDeleteOfParents = 0;
	$x->AllowFilters = 1;
	$x->AllowSavingFilters = (getLoggedAdmin() !== false);
	$x->AllowSorting = 1;
	$x->AllowNavigation = 1;
	$x->AllowPrinting = 1;
	$x->AllowPrintingDV = 1;
	$x->AllowCSV = 1;
	$x->RecordsPerPage = 10;
	$x->QuickSearch = 1;
	$x->QuickSearchText = $Translation['quick search'];
	$x->ScriptFileName = 'Categoria_view.php';
	$x->RedirectAfterInsert = 'Categoria_view.php?SelectedID=#ID#';
	$x->TableTitle = 'Categoria';
	$x->TableIcon = 'table.gif';
	$x->PrimaryKey = '`Categoria`.`id`';

	$x->ColWidth = [150, ];
	$x->ColCaption = ['Categoria', ];
	$x->ColFieldName = ['Categoria', ];
	$x->ColNumber  = [2, ];

	// template paths below are based on the app main directory
	$x->Template = 'templates/Categoria_templateTV.html';
	$x->SelectedTemplate = 'templates/Categoria_templateTVS.html';
	$x->TemplateDV = 'templates/Categoria_templateDV.html';
	$x->TemplateDVP = 'templates/Categoria_templateDVP.html';

	$x->ShowTableHeader = 1;
	$x->TVClasses = "";
	$x->DVClasses = "";
	$x->HasCalculatedFields = false;
	$x->AllowConsoleLog = false;
	$x->AllowDVNavigation = true;

	// hook: Categoria_init
	$render = true;
	if(function_exists('Categoria_init')) {
		$args = [];
		$render = Categoria_init($x, getMemberInfo(), $args);
	}

	if($render) $x->Render();

	// hook: Categoria_header
	$headerCode = '';
	if(function_exists('Categoria_header')) {
		$args = [];
		$headerCode = Categoria_header($x->ContentType, getMemberInfo(), $args);
	}

	if(!$headerCode) {
		include_once(__DIR__ . '/header.php'); 
	} else {
		ob_start();
		include_once(__DIR__ . '/header.php');
		echo str_replace('<%%HEADER%%>', ob_get_clean(), $headerCode);
	}

	echo $x->HTML;

	// hook: Categoria_footer
	$footerCode = '';
	if(function_exists('Categoria_footer')) {
		$args = [];
		$footerCode = Categoria_footer($x->ContentType, getMemberInfo(), $args);
	}

	if(!$footerCode) {
		include_once(__DIR__ . '/footer.php'); 
	} else {
		ob_start();
		include_once(__DIR__ . '/footer.php');
		echo str_replace('<%%FOOTER%%>', ob_get_clean(), $footerCode);
	}
