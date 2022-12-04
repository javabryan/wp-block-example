import { 
	TextControl,
	InspectorControls,
	PanelBody
} from '@wordpress/components';

import { 
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div>
			<InspectorControls
				title={ __('select an image', 'gutenpride')}
				initalOpen={ true }
			>
				<PanelBody>
					<div className="background-image"></div>
				</PanelBody>
			</InspectorControls>
			<TextControl
					{ ...blockProps }
					value={ attributes.message }
					onChange={ (r val ) => setAttributes( { message: val } ) }
			/>
		</div>
	);
}