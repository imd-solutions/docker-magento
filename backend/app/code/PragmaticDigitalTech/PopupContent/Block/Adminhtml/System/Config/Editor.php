<?php
/**
 * @category PragmaticDigitalTech
 * @package PragmaticDigitalTech_PopupContent
 * @version 1.0.0
 * @copyright Copyright (c) 2022 PragmaticDigitalTech Company. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * @author PragmaticDigitalTech Company <contact@pragmaticdigitaltech.com>
 * @link https://pragmaticdigitaltech.com
 */

namespace PragmaticDigitalTech\PopupContent\Block\Adminhtml\System\Config;

use Magento\Backend\Block\Template\Context;
use Magento\Cms\Model\Wysiwyg\Config as WysiwygConfig;
use Magento\Config\Block\System\Config\Form\Field;

class Editor extends Field
{
    /**
     * @var WysiwygConfig
     */
    private $wysiwygConfig;

    /**
     * Editor constructor.
     * @param Context $context
     * @param WysiwygConfig $wysiwygConfig
     * @param array $data
     */
    public function __construct(
        Context $context,
        WysiwygConfig $wysiwygConfig,
        array $data = []
    )
    {
        $this->wysiwygConfig = $wysiwygConfig;
        parent::__construct($context, $data);
    }

    /**
     * @param \Magento\Framework\Data\Form\Element\AbstractElement $element
     * @return string
     */
    protected function _getElementHtml(\Magento\Framework\Data\Form\Element\AbstractElement $element)
    {
        $element->setWysiwyg(true);
        $element->setConfig($this->wysiwygConfig->getConfig($element));

        return parent::_getElementHtml($element);
    }
}