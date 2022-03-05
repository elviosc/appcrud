<?php
	$rdata = array_map('to_utf8', array_map('safe_html', array_map('html_attr_tags_ok', $rdata)));
	$jdata = array_map('to_utf8', array_map('safe_html', array_map('html_attr_tags_ok', $jdata)));
?>
<script>
	$j(function() {
		var tn = 'Posts';

		/* data for selected record, or defaults if none is selected */
		var data = {
			caregoria_id: <?php echo json_encode(['id' => $rdata['caregoria_id'], 'value' => $rdata['caregoria_id'], 'text' => $jdata['caregoria_id']]); ?>,
			tag_id: <?php echo json_encode(['id' => $rdata['tag_id'], 'value' => $rdata['tag_id'], 'text' => $jdata['tag_id']]); ?>
		};

		/* initialize or continue using AppGini.cache for the current table */
		AppGini.cache = AppGini.cache || {};
		AppGini.cache[tn] = AppGini.cache[tn] || AppGini.ajaxCache();
		var cache = AppGini.cache[tn];

		/* saved value for caregoria_id */
		cache.addCheck(function(u, d) {
			if(u != 'ajax_combo.php') return false;
			if(d.t == tn && d.f == 'caregoria_id' && d.id == data.caregoria_id.id)
				return { results: [ data.caregoria_id ], more: false, elapsed: 0.01 };
			return false;
		});

		/* saved value for tag_id */
		cache.addCheck(function(u, d) {
			if(u != 'ajax_combo.php') return false;
			if(d.t == tn && d.f == 'tag_id' && d.id == data.tag_id.id)
				return { results: [ data.tag_id ], more: false, elapsed: 0.01 };
			return false;
		});

		cache.start();
	});
</script>

